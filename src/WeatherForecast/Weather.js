import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import image from "./weather1.jpg"
import {AiOutlineSearch} from "react-icons/ai"
import axios from "axios"


export const Weather = () => {


    const [user, setUser] = useState([])
    const [text, setText]= useState("")
    // const url = "https://jsonplaceholder.typicode.com/users"

    const url =`https://api.openweathermap.org/data/2.5/weather?q=ikeja&appid=e3ffb0aad6fff47baf065fbbabbfcb6d`;

    const getData = async ()=>{
       const {data}= await axios.get(url)
       setUser(data)
       console.log(data)
    }

    useEffect(()=>{
        getData()
        // console.log(user)
        // console.log(url)
    },[])

    return (
        <Container>
            <Holder>
            <Input placeholder="Search for Location" />
            <span><AiOutlineSearch onClick={()=>{
                console.log("am in")
            }}/></span>
            </Holder>
            <Wrapper>
                    <Card>
                    <Top>
                    <DateContainer>
                        <Time>{user.timezone}</Time>
                        <Date></Date>
                    </DateContainer>
                    <Location>
                        <City>{user.name}</City>
                        <Geography>
                            <Longitude></Longitude>
                            <Latitude></Latitude>
                        </Geography>
                    </Location>
                    </Top>
                    <CurrentInfo>
                        <Description>
                            <Icon>Icon</Icon>
                            <Desc>Light Rain</Desc>
                        </Description>
                        <Others>
                            <Main>
                              <Wind>Wind</Wind>
                              <span>248</span>
                            </Main>
                            <Main>
                                <Temperature>Temperature</Temperature>
                                <span>248</span>
                            </Main>
                            <Main>
                              <Humidity>Humidity</Humidity>
                              <span>248</span>
                            </Main>
                            <Main>
                            <Pressure>Pressure</Pressure>
                                <span>248</span>
                            </Main>
                         
                        </Others>
                    </CurrentInfo>
                    <Bottom>
                        <BottomTop>{user.station}</BottomTop>
                    </Bottom>
                </Card>
            </Wrapper>
        </Container>
    )
}

const Holder=styled.div`
margin:10px 0;
display:flex;
width:300px;
height:30px;
border-radius:20px;
background-color:grey;
display:flex;
align-items:center;

span{
    margin-right:15px;
    background-color:reansparent;
}
`;
const Input=styled.input`
height:100%;
border-radius:20px;
border:0;
outline:none;
background-color:transparent;

flex:1;

::placeholder{
    font-size:16px;
    padding-left:10px;
    font-weight:bold;
    color:antiquewhite;

}
`;
const BottomTop=styled.div``;
const Bottom=styled.div`
width:114%;
height:150px;
border-radius:10px;
background-color:blue;
`;
const Icon=styled.div`
margin-bottom:20px;
`;
const Desc=styled.div``;
const Temperature=styled.div``;
const Pressure=styled.div``;
const Wind=styled.div``;
const Humidity=styled.div``;
const Others=styled.div`
display:flex;
`;
const Main=styled.div`
margin: 0 10px;
`;
const Top=styled.div`
width:100%;
display:flex;
justify-content:space-between;
margin:15px 0;
`;
const Location=styled.div``;
const City=styled.div`
display:flex;
justify-content:flex-end;

`;
const Geography=styled.div`
display:flex;
width:110px;
background-color:red;
justify-content:space-between;
`;
const Longitude=styled.div``;
const Latitude=styled.div``;
const CurrentInfo=styled.div`
display:flex;
flex-direction:column;
align-items:center;
flex:1;

`;
const Description=styled.div`
margin:20px;
`;
const Time=styled.div``;
const Date=styled.div``;
const Card=styled.div`
width:300px;
height:400px;
border-radius:10px;
// border:1px solid grey;
background-color:red;
background-image: url("weather3.jpeg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color:white;
font-weight: bold;
padding:0 20px;
display:flex;
flex-direction: column;
align-items: center;

`;
const DateContainer=styled.div``;
const Container=styled.div`
width:100%;
height:100%;
min-height:100vh;
background-color:black;
color:white;
display:flex;
flex-direction: column;
align-items: center;
`;
const Wrapper=styled.div`
 width:100%;
//  height:100%;
 flex-wrap:wrap;
 display:flex;
 justify-content:center;
`;