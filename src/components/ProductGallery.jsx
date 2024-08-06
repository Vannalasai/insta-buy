import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function getProductGallery(){

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function getProducts() {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=3&limit=20');
            console.log(response.data)
            setProducts(response.data)
        }
        getProducts();
    }, [])
    
    return(
        <div style={{padding: 50}}>
            <h3>Select a Product :</h3>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {products.map((product) => {
                    return(
                        <Card key={product.id} style={{width: '15rem', border:'none', margin: 15}}>
                            <Card.Img src={product.images[0]}/>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>$ {product.price}</Card.Text>
                            <Button onClick={() => navigate(`/product/${product.id}`, {state: product})} style={{width:120}}>View item</Button>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}