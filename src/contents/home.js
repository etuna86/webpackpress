import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Home(){
    return(
        <div className={''} >
            <Container>
                <Row>
                    <Col md="12" >
                        <div className={"page-content"}>
                            {"Home Page"}
                         
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
}




export default Home;