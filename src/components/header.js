import React from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/spaceX.png';
import MobileMenu from './mobileMenu';
import profile from '../images/profile.png'
import { Dropdown } from 'react-bootstrap';
import Login from "../pages/login";

const Wrapper = styled.div`
  margin-bottom: 5rem;
  background: rgba(0,0,0,0.7);
  width: 100%;
  margin-bottom: 1rem;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  @media (min-width: 1681px) {
    max-width: 1400px;
  }
  @media (max-width: 740px) {
    padding: 1rem 5%;
  }
`;

const NavWrapper = styled.div`
  margin-top: 0.3rem;
  @media (max-width: 740px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-weight: 400;
  color: white;
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
const logoImg = {
    width: '28%',
    marginTop: '-20px',
    marginBottom: '-19px'
}
const profileImg = {
    width: '28%',
    marginTop: '-20px',
    marginBottom: '-19px'
}
const prof = {
    textAlign: 'right',
    cursor: 'pointer',
    boxShadow: 'none',
    border: 'none'
}
const LogoWrapper = styled.div`
  display: flex;
  @media (max-width: 740px) {
    flex-direction: column;
    img {
      width: 100px;
    }
  }
`;

const renderMobileMenu = (props) => {
  return (
    <MobileMenu>
      <Link to="/" aria-label="Go to space-x-altra home page">
        HOME
      </Link>
      <Link to="/launches" aria-label="Go to previous launches page">
        LAUNCHES
      </Link>
      <Link to="/about" aria-label="Go to the about page">
        ABOUT
      </Link>
    </MobileMenu>
  );
};

class Header extends React.Component{
    state = {
        isRedirect: false,
    }
    logOut = () => {
        alert()
        this.setState({ isRedirect: true });
        localStorage.removeItem('LoggedIn')
        window.location.reload(false);
    };
    render() {
        return(
            <Wrapper>
                <Container>
                    <LogoWrapper>
                        <Link to="/" aria-label="Go to space-x-altra home page">
                            <img style={logoImg} src={logo} alt="space-x-altra logo" />
                        </Link>
                    </LogoWrapper>
                    {renderMobileMenu()}
                    <NavWrapper>
                        <NavLink to="/" aria-label="Go to space-x-altra home page">
                            HOME
                        </NavLink>
                        <NavLink to="/launches" aria-label="Go to previous launches page">
                            LAUNCHES
                        </NavLink>
                        <NavLink to="/about" aria-label="Go to the about page">
                            ABOUT
                        </NavLink>
                    </NavWrapper>

                    <div style={prof}>
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="default" id="dropdown-basic" style={prof}>
                                <img src={profile} alt="profile" style={profileImg}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                                <Dropdown.Item onClick={()=>this.logOut()} >Logout</Dropdown.Item>
                                {this.state.isRedirect ? <>
                                    <Redirect to="/" />
                                    <Route path="/login" component={Login}/>
                                </>: null }
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </Container>
            </Wrapper>
        )
    }
}

export default Header;
