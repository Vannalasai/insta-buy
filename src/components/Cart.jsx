import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import {Row , Col , Button } from "react-bootstrap";

import CartImage from "../assets/cart.png";
import { useNavigate } from "react-router-dom";

export default function Cart({cartItems}) {
    console.log(cartItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let tempPrice = 0;
        let tempQuantity = 0;
        Object.keys(cartItems).map((cartItemId) => {
            const details = cartItems[cartItemId];
            tempQuantity += details.quantity;
            tempPrice += details.quantity * details.price;
        })
        setTotalQuantity(tempQuantity);
        setTotalPrice(tempPrice);
    }, [])
    return(
        <div style={{margin:60}}>
            <Row>
                <Col style={{margin:40}}>
                    <h3>Your Cart :</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(cartItems).map((cartItemId) => {
                                const itemDetails = cartItems[cartItemId];
                                return(
                                    <tr>
                                        <td>{itemDetails.title}</td>
                                        <td>{itemDetails.quantity}</td>
                                        <td>{itemDetails.quantity * itemDetails.price}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td>Total</td>
                                <td>{totalQuantity}</td>
                                <td>{totalPrice}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button onClick={() => {navigate('/checkout')}} style={{marginTop:20}}>Checkout</Button>
                </Col>
                <Col>
                    <img height="600px" src={CartImage} alt="" />
                </Col>
            </Row>
            
        </div>
    )
}