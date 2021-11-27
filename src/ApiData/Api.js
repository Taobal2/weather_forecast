import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Api = () => {
  // const [user, setUser]=useState([]);
  // const [text, setText]=useState("");

  // const url = `https://api.github.com/users/${text}`

  // const getData = async () => {

  //     await fetch(url).then(res=>res.json().then((data)=>setUser(data)))
  //     console.log(user)
  // }

  // useEffect(()=>{
  //     getData()
  //     console.log(url)

  // },[])

  const [user, setUser] = useState([]);
  const [text, setText] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";

  const getData = async () => {
    await fetch(url).then((res) => res.json().then((data) => setUser(data)));
    console.log(user);
  };

  useEffect(() => {
    getData();
    console.log(url);
  }, []);

  return (
    <Container>
      <Holder>
        <Input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            getData();
            console.log(text);
            setText("");
          }}
        >
          search
        </Button>
      </Holder>
      <Wrapper>
        <Card>
          <Image />
          <Content>
            <Name>Name</Name>
            <Repos>id</Repos>
          </Content>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Holder = styled.div``;
const Button = styled.button``;
const Input = styled.input`
  width: 200px;
  height: 30px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  margin: 5px;
`;
const Image = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  background-color: red;
`;
const Content = styled.div``;
const Repos = styled.div``;
const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Info = styled.div``;

const Container = styled.div`
  width: 100 %;
  height: 100 %;
  min-height: 100 vh;
  background-color: teal;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
