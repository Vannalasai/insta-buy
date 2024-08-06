import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

import CarouselOneImg from '../assets/carousel-1.png';
import CarouselTwoImg from '../assets/carousel-2.png';
import CarouselThreeImg from '../assets/carousel-3.png';

import CompanyOneImg from '../assets/company-1.png'
import CompanyTwoImg from '../assets/company-2.png'
import CompanyThreeImg from '../assets/company-3.png'
import CompanyFourImg from '../assets/company-4.png'
import CompanyFiveImg from '../assets/company-5.png'
import CompanySixImg from '../assets/company-6.png'
import { useNavigate } from 'react-router-dom';

export default function Home({user}) {
    const navigate = useNavigate();
    const handleCTAClick = () => {
        if(user) {
            // navigate to products page
            navigate('/products')
        } else {
            navigate('/login')
        }
    }
    return(
        <div className='home-container'>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding: 200}}>
                                <h4 style={{fontSize:"32px", fontWeight:"bold"}}><i>SHOP WITH UTMOST</i></h4>
                                <h3 style={{color: "#5471fe", fontSize:"45px", fontWeight:"bold"}}><i>STYLE</i></h3>
                                <h5 style={{fontSize: "25px"}}>shop from the latest trendy <br /> clothes to the  best gadgets.</h5>
                                <div style={{marginTop:"20px"}}><Button style={{width: 250}} onClick={handleCTAClick}>Browse Products</Button></div>
                                <div>
                                    <h3 style={{marginTop:"20px", fontSize:"22px", color:"#546E7A"}}>Products are available from:</h3>
                                </div>
                                <div>
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyOneImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyTwoImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyThreeImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyFourImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyFiveImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanySixImg} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <img height="660px" width='100%' src={CarouselOneImg} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item> 
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding: 200}}>
                                <h4 style={{fontSize:"32px", fontWeight:"bold"}}><i>SHOP WITH UTMOST</i></h4>
                                <h3 style={{color: "#5471fe", fontSize:"45px", fontWeight:"bold"}}><i>CONFIDENCE</i></h3>
                                <h5 style={{fontSize: "25px"}}>shop from the latest trendy <br /> clothes to the  best gadgets.</h5>
                                <div style={{marginTop:"20px",}}><Button style={{width: 250}} onClick={handleCTAClick}>Browse Products</Button></div>
                                <div>
                                    <h3 style={{marginTop:"20px", fontSize:"22px", color:"#546E7A"}}>Products are available from:</h3>
                                </div>
                                <div>
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyOneImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyTwoImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyThreeImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyFourImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyFiveImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanySixImg} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <img height="660px" width='100%' src={CarouselTwoImg} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding: 200}}>
                                <h4 style={{fontSize:"32px", fontWeight:"bold"}}><i>SHOP WITH UTMOST</i></h4>
                                <h3 style={{color: "#5471fe", fontSize:"45px", fontWeight:"bold"}}><i>DISCOUNTS</i></h3>
                                <h5 style={{fontSize: "25px"}}>shop from the latest trendy <br /> clothes to the  best gadgets.</h5>
                                <div style={{marginTop:"20px",}}><Button style={{width: 250}} onClick={handleCTAClick}>Browse Products</Button></div>
                                <div>
                                    <h3 style={{marginTop:"20px", fontSize:"22px", color:"#546E7A"}}>Products are available from:</h3>
                                </div>
                                <div>
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyOneImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyTwoImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyThreeImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyFourImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanyFiveImg} alt="" />
                                    <img height="42px" style={{marginRight:"12px", marginTop:"10px"}} src={CompanySixImg} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <img height="660px" width='100%' src={CarouselThreeImg} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>   
            </Carousel> 
        </div>
    )
}