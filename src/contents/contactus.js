import React from 'react';
import { Container, Row, Col } from 'reactstrap';


function Contactus(){
    return(
        <div className={'col'} >
            <Container>
                <Row>
                    <Col md="12" >
                        <div className={"aboutus"}>
                            {"Contact Us"}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}




export default Contactus;