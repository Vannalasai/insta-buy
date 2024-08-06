import { Row, Col, Button, Form} from "react-bootstrap"
import LoginImg from "../assets/Login.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login ({setUser}) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    return(
        <div style={{backgroundColor: "#216ad9", height:"93vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Row>
                <Col style={{padding: 100}}>
                    <div>
                        <h1 style={{color:"white", fontSize:"90px"}}>InstaBuy!</h1>
                        <h3 style={{color:"white", fontSize:"23px", marginTop:"15px", fontWeight:"lighter"}}>One place where brands come <br />together from all across the <br />world.</h3>
                    </div>
                    <Form>
                        <div style={{display:"flex", justifyContent:'space-between', marginTop:"20px"}}>
                            <Form.Group style={{width: "48%"}} className="mb-3" controlId="formBasicEmail" required>
                                <Form.Control style={{padding:"15px"}} type="username" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group style={{width: "48%"}} className="mb-3" controlId="formBasicPassword">
                                <Form.Control style={{padding:"15px"}} type="password" placeholder="Password" required/>
                            </Form.Group>
                        </div>
                        <Button onClick={() => {
                            localStorage.setItem('userEmail', email);
                            setUser(email);
                            navigate('/');
                        }} style={{border:"2px solid white", borderRadius:"0px", width:"100%", padding:"13px", marginTop:"20px", fontSize:"18px"}} variant="primary" type="submit">
                            Start Shopping
                        </Button>
                        <div style={{color:"white", textAlign:"center", marginTop:"20px", fontSize:"18px"}}>
                            Join the club, <a style={{color:"white"}} onClick={() => navigate('/signup')}>click here</a>
                        </div>
                    </Form>
                </Col>
                <Col>
                    <img height="600px" src={LoginImg} alt="" />
                </Col>
            </Row>
        </div>
    )
}