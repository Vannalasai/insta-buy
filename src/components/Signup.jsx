import { Row, Col, Button, Form} from "react-bootstrap"
import SignupImg from "../assets/Signup.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup ({setUser}) {
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
                            <Form.Group style={{width: "48%"}} className="mb-3" controlId="formBasicEmail">

                                <Form.Control style={{padding:"15px"}} type="username" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group style={{width: "48%"}} className="mb-3" controlId="formBasicPassword">
                                <Form.Control style={{padding:"15px"}} type="password" placeholder="Password" />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group style={{width: "100%"}} className="mb-3" controlId="formBasicEmail">
                                <Form.Control style={{padding:"15px"}} type="text" placeholder="Enter Full Name" />
                            </Form.Group>
                        </div>
                        <Button onClick={() => {
                            localStorage.setItem('userEmail', email);
                            setUser(email);
                            navigate('/');
                        }} style={{border:"2px solid white", borderRadius:"0px", width:"100%", padding:"13px", marginTop:"8px", fontSize:"18px"}} variant="primary" type="submit">
                            Join the club
                        </Button>
                        <div style={{color:"white", textAlign:"center", marginTop:"20px", fontSize:"18px"}}>
                            Already a member? <a style={{color:"white"}} onClick={() => navigate('/login')}>click here</a>
                        </div>
                    </Form>
                </Col>
                <Col>
                    <img height="600px" src={SignupImg} alt="" />
                </Col>
            </Row>
        </div>
    )
}