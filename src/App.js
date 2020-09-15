import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Switch,withRouter  } from 'react-router-dom';
import './resources/sass/app.scss';
import Header from './layouts/header.js';
import Content from './contents/content.js';
import Footer from './layouts/footer.js';

import Logo from './img/logo.png';

import { createBrowserHistory } from "history";

var chistory = createBrowserHistory();


class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div className="main-page">
        <Router  history={ chistory } >
          <Header />
          <Content/>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
