import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const myApiCall = async () => {
    const url = "https://redux-movie-api.herokuapp.com/api/movies";

    await axios.get(url).then((url) => {
      console.log(url.data[id]);
      setData(url.data[id]);
    });
  };

  useEffect(() => {
    myApiCall();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Card>
          <Image src={data?.image} />
          <Text>{data?.title}</Text>
          <Desc>{data?.description}</Desc>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default MovieDetails;

const Desc = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const Card = styled.div`
  width: 800px;
  height: 750px;
  border-radius: 10px;
  border: 1px solid blue;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 400ms;
  transform: scale(1);
  margin: 10px;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 650px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  background-color: teal;
  flex: 1;
`;

const Text = styled.div`
  margin-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
