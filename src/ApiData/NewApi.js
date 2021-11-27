import react, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const NewApi = () => {
  const [data, setData] = useState([]);

  const axiosApi = async () => {
    const url = "https://redux-movie-api.herokuapp.com/api/movies";

    await axios.get(url).then((url) => {
      console.log(url.data);
      setData(url.data);
    });
  };

  useEffect(() => {
    axiosApi();
  }, []);
  return (
    <Container>
      <Wrapper>
        {data?.map((props, i) => (
          <Card key={i} to={`/detals/${i}`}>
            <Image src={props.image} />
            <Title>{props.title}</Title>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default NewApi;

const Card = styled(Link)`
  width: 350px;
  height: 400px;
  border-radius: 10px;
  background-color: coral;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Title = styled.div`
  color: white;
  text-decoration: none;
  font-size: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
  padding-top: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
