import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { TiWeatherDownpour } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigation>
          <NavHolder to="/firstapi">
            <Icon>
              <AiFillHome />
            </Icon>
            <Nav>Home</Nav>
          </NavHolder>
          <NavHolder to="/api">
            <Icon>
              <BiMoviePlay />
            </Icon>
            <Nav>Movie</Nav>
          </NavHolder>
          <NavHolder to="/weather">
            <Icon>
              <TiWeatherDownpour />
            </Icon>
            <Nav>Weather</Nav>
          </NavHolder>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  margin: 0 15px;
`;

const Navigation = styled.div`
  display: flex;
`;

const NavHolder = styled(Link)`
  margin: 0 10px;
  display: flex;
  align-items: center;
  color: white;
`;

const Nav = styled.div`
  font-size: 20px;
  margin: 0 5px;
`;

const Icon = styled.div`
  font-size: 25px;
  margin-top: 5px;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  color: white;
  position: fixed;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
