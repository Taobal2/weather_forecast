import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image from "./weather1.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import sun from "./sunicon.png";
import rain from "./rainicon.jpg";

export const Weather1 = () => {
  const [user, setUser] = useState([]);
  const [text, setText] = useState("ikeja");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=e3ffb0aad6fff47baf065fbbabbfcb6d`;

  const getData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    getData();
    console.log("weather data", user);
  }, [text]);

  return (
    <Container>
      {" "}
      <Holder>
        {" "}
        <Input
          placeholder="Search for Location"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />{" "}
        <span>
          {" "}
          <AiOutlineSearch
            onClick={() => {
              getData();
              console.log(text);
              setText("");
            }}
          />{" "}
        </span>{" "}
      </Holder>{" "}
      <Wrapper>
        {" "}
        <Card>
          {" "}
          <Top>
            {" "}
            <DateContainer>
              {" "}
              <Time>{user?.timezone}</Time>
              <Date>october 2 2021</Date>{" "}
            </DateContainer>{" "}
            <Location>
              <City>
                {user?.sys.country}/{user?.name}
              </City>
              <Geography>
                <Longitude>{user?.coord?.lat}</Longitude>{" "}
                <Latitude>{user?.coord?.lat}</Latitude>
              </Geography>{" "}
            </Location>{" "}
          </Top>{" "}
          <CurrentInfo>
            {" "}
            <Description>
              {" "}
              <Icon>{/* {user?.weather[0].description} */}</Icon>
              <Desc></Desc>{" "}
            </Description>{" "}
            <Others>
              {" "}
              <Main>
                {" "}
                <Wind> Wind </Wind>
                <span>{user?.wind?.deg}m/s</span>{" "}
              </Main>{" "}
              <Main>
                {" "}
                <Temperature> Temprature </Temperature>{" "}
                <span>{/* {Math.floor(user.main.temp - 273)}°c */}</span>{" "}
              </Main>{" "}
              <Main>
                {" "}
                <Humidity> Humidity </Humidity>
                <span>{user?.main?.humidity}%</span>{" "}
              </Main>{" "}
              <Main>
                {" "}
                <Pressure> Pressure </Pressure>{" "}
                <span>{user?.main?.pressure}</span>{" "}
              </Main>{" "}
            </Others>
          </CurrentInfo>{" "}
          <Bottom>
            {" "}
            <BottomTop>
              {" "}
              <Sunset>
                {" "}
                Sunset <span></span>{" "}
              </Sunset>
              <Sunrise>
                Sunrise<span></span>{" "}
              </Sunrise>{" "}
            </BottomTop>{" "}
          </Bottom>{" "}
        </Card>{" "}
      </Wrapper>{" "}
    </Container>
  );
};

// {user?.timezone}
// {user?.sys.country}/{user?.name}
// {user?.coord?.lat}
// {user?.coord?.lat}
// {user?.weather[0]?.icon}
// {user?.wind?.deg}m/s
// {Math.floor(user.main.temp - 273)}°c
// {user?.main?.humidity}%
// {user.sys.sunset}
// {user.sys.sunrise}

const Sunset = styled.div`
margin-bottom: 10px;

    span {
        margin - left: 60px;
  }
`;

const Sunrise = styled.div`
    span {
    margin - left: 55px;
  }
`;

const Holder = styled.div`
  margin: 10px 0;
  display: flex;
  width: 300px;
  height: 30px;
  border-radius: 20px;
  background-color: grey;
  display: flex;
  align-items: center;

  span {
    margin-right: 15px;
    background-color: transparent;
  }
`;

const Input = styled.input`
height: 100%;
border-radius: 20px;
border: 0;
outline: none;
background-color: transparent;
color: white;
padding-left: 10px;
font-size: 16px;
flex: 1;

::placeholder {
    font - size: 16px;  
    font-weight: bold;
    color: antiquewhite;
  }

  
`;
const BottomTop = styled.div`
  padding-left: 30px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background-color: rgba(0, 0, 255, 0.6);
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-bottom: 20px;
`;

const Desc = styled.div``;

const Temperature = styled.div``;

const Pressure = styled.div``;

const Wind = styled.div``;

const Humidity = styled.div``;

const Others = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid white;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Main = styled.div`
  margin: 3px 10px;
  display: flex;
  justify-content: space-between;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;
const Location = styled.div``;
const City = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 15px;
  margin-bottom: 10px;
`;

const Geography = styled.div`
  display: flex;
  width: 110px;
  justify-content: space-between;
  margin-right: 15px;
`;
const Longitude = styled.div``;

const Latitude = styled.div`
margin-left
`;

const CurrentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const Description = styled.div`
  margin: 20px;
`;
const Time = styled.div`
  margin-left: 15px;
  margin-bottom: 10px;
`;
const Date = styled.div`
  margin-left: 15px;
`;
const Card = styled.div`
  width: 400px;
  height: 450px;
  border-radius: 10px;
  // border:1px solid grey;
  background-color: red;
  background-image: url("weather3.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DateContainer = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  //  height:100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;
