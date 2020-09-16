import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router,
    Switch,
    Route,Link  } from 'react-router-dom';
import Logo from '../img/logo.png';


function Header(){
    return(
        <header className={'main-header'} >
            <Container>
                <Row>
                    <Col md="4" >
                        <div className={"logo-section"}>
                           <a href={"/"}> <img src={Logo} /></a>
                        </div> 
                    </Col>
                    <Col md="8" >
                        <nav className={"main-menu"}>
                            <ul>
                                <Route>
                                    <li> <Link to={"/"} >Home</Link></li>
                                    <li> <Link to={"/aboutus"} >About us </Link></li>
                                    <li> <Link to={"/contactus"} >Contact us </Link></li>
                                </Route>   
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}




export default Header;