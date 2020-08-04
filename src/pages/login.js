import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import back_vid from '../video/video.mp4';
import styled from "styled-components";

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
  z-index: 999;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
`;

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.goHome = this.goHome.bind(this)
    }

    goHome = (e) => {
        e.preventDefault();
        // const url = `https://run.mocky.io/v3/37cdf6f8-7d52-42cd-add0-bb7cb1821fef`;
        //
        // const { data } = useFetch(url);
        // console.log(data);
        // localStorage.setItem('LoggedIn', 'true');
        this.props.handelClick();
        // this.props.history.push('/home')
    }


    render() {
        return (
            <Container >
                <video style={styles} autoPlay loop muted >
                    <source src={back_vid} type='video/mp4' />
                </video>
                <Wrapper>
                    <div className="Login">
                        <form >
                            <div className="form-group">

                                <label htmlFor="uId">User Id</label>
                                <input className="form-control" type="text" />
                            </div>
                            <FormGroup controlId="password" bssize="large">
                                <FormLabel>Password</FormLabel>
                                <FormControl

                                    type="password"
                                />
                            </FormGroup>
                            <Button block bssize="large" type="submit" onClick={(e)=>this.goHome(e)} >
                                Login
                            </Button>
                        </form>
                    </div>

                </Wrapper>
            </Container>

        );
    }
}

export default Login;
