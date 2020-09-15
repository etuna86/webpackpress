import React from 'react';
import { Container, Row, Col } from 'reactstrap';
function Footer(){
    return(
        <footer className={'footer'} >
            <Container>
                <Row>
                    <Col md="4" >
                        <div className={"logo-section"}>
                         
                        </div> 
                    </Col>
                    <Col md="8" >
                        <nav className={"main-menu"}>
                            <ul>
                                <li><a href={"/"}>Ana Sayfa</a></li>
                                <li><a href={"/"}>Ana Sayfa</a></li>
                                <li><a href={"/"}>Ana Sayfa</a></li>
                                <li><a href={"/"}>Ana Sayfa</a></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}




export default Footer;