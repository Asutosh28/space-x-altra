import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
// import { hashHistory } from 'react-router;'

import { createHashHistory } from 'history'
import Home from './pages/home';
import About from './pages/about';
import Launches from './pages/launches';
import Launch from './pages/launch';
// import {useFetch} from "./hooks/useFetch";
import Login from './pages/login'
import back_vid from "./video/video.mp4";
import styled from "styled-components";
export const history = createHashHistory();
const axios = require('axios').default;
const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    width: '100%',
    float: 'left',
    padding: 0,
    overflow: 'hidden'
}
const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding-top: 10rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1681px) {
    max-width: 1400px;
  }
  @media (min-width: 741px) and (max-width: 1100px) {
    padding-top: 106px;
  }
  @media (max-width: 740px) {
    padding-top: 98px;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;

const HeaderRoutes = props => (
    <React.Fragment>
      <Switch>
          <Route path="/" exact >
              <Redirect from="/" to="/home" />
          </Route>
          <Route path="/login*" exact >
              <Redirect from="/login" to="/home" />
          </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/launches">
          <Launches />
        </Route>
        <Route path="/launch/:id">
          <Launch />
        </Route>
      </Switch>
    </React.Fragment>
)
export default class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = { token: localStorage.getItem('LoggedIn') };
      this.handelClick = this.handelClick.bind(this);
      this.getUser = this.getUser.bind(this);
  }
    handelClick = () => {
      // alert()
        this.getUser(this);
        console.log()
    };
    getUser(callback) {
        axios.get('https://run.mocky.io/v3/37cdf6f8-7d52-42cd-add0-bb7cb1821fef')
            .then(function (response) {
                console.log(response);
                localStorage.setItem('LoggedIn', 'true');
                callback.setState({ token: 'true' });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
  render() {
    {
      if (this.state.token !== 'true'){
        return <Router>
                  <Switch>
                      {/*<Redirect from="*" to="/login" />*/}
                      <Route path="*"  >
                          <Redirect to="/login" />
                          <Login handelClick={()=>this.handelClick()} />
                      </Route>

                  </Switch>
                </Router>
      } else {
        return <Router>
                  <Switch>
                    <Route component={HeaderRoutes}>
                    </Route>
                  </Switch>
                </Router>
      }
    }

  }
}
