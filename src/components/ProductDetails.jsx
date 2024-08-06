import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row , Col , Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function ProductDetails ({cartItems, handleAddToCart}) {
    const location = useLocation();
    const {title, images, price, description, category, id} = location.state;
    // console.log(product);  
    const navigate = useNavigate();
    const [otherProducts, setOtherProducts] = useState([]);

    useEffect (() => {
        async function getData () {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0`);
            setOtherProducts(response.data);
        }
        getData();
    })

    return(
        <div style={{padding: 50}}>
            <Row>
                <Col lg={2}>
                    <div>
                        {images.map((image, index) => {
                            return(
                                <img key={index} src={image} width={150} style={{marginBottom:40, borderRadius:9}} alt="" />
                            )
                        })}
                    </div>
                </Col>
                <Col lg={5}>
                    <div>
                        <img src={images[0]} width={450} style={{marginBottom:40, borderRadius:9}} alt="" />
                        <h3>{title}</h3>
                        <h3 style={{color:'#216ad9'}}>$ {price}</h3>
                        <div>{description}</div>
                        <Button style={{marginTop: 20}} onClick={() => {
                            if(id in cartItems){
                                const currentItem = cartItems[id];
                                handleAddToCart ({[id]: {title, price, quantity: currentItem.quantity + 1}})
                            } else {
                                handleAddToCart ({[id]: {title, price, quantity: 1}})
                            }
                            
                        }}>Add to cart</Button>
                    </div>
                </Col>
                <Col lg={5}>
                    <div>
                        <h3>Other Similar Products :</h3>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                            {otherProducts.map((product) => {
                                if(product.id == id) return
                                return(
                                    <Card key={product.id} style={{width: '9.5rem', border:'none', margin: 15}}>
                                        <Card.Img src={product.images[0]}/>
                                        <Card.Title>{product.title.split(' ')[0]}</Card.Title>
                                        <Card.Text>$ {product.price}</Card.Text>
                                        <Button onClick={() => navigate(`/product/${product.id}`, {state: product})} style={{width:120}}>View item</Button>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}