import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route,Switch,withRouter  } from 'react-router-dom';
/*** Contents Start ***/
import Home from './home.js';
import Aboutus from './aboutus.js';
import Contactus from './contactus.js';

/*** Contents Finish***/


function Content(){
    return(
        <div className={''} >
            <Container>
                <Switch>
                    <Route  exact  path={'/'} component={withRouter(Home)} />
                    <Route exact path={'/aboutus'} component={withRouter(Aboutus)} />
                    <Route exact path={'/contactus'}  component={withRouter(Contactus)} />
                </Switch>
            </Container>
        </div>
    );
}




export default Content;