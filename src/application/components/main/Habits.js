import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import Header from "../header-menu/Header";
import Menu from "../header-menu/Menu";
import AddHabits from "./AddHabits";

export default function Habits() {
  const user = useContext(UserContext);
  console.log(user);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    const request = axios.get("#");

    request.then((response) => console.log(response));
    request.catch(() => console.log("deuruim"));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TopContainer>
          <Title>Meus hábitos</Title>
          <Button onClick={() => setEnable(true)}>+</Button>
        </TopContainer>
        {enable ? <AddHabits setEnable={setEnable} /> : ""}
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Container>
      <Menu />
    </>
  );
}

const Container = styled.div`
  margin-top: 91px;
  padding-left: 16px;
  padding-right: 16px;

  width: calc(100vw - 18px);

  p {
    font-size: 18px;
    line-height: 22.47px;
  }
`;

const Title = styled.p`
  font-size: 23px;
  color: #126ba5;
`;

const TopContainer = styled.div`
  width: 100%;

  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 35px;

  border: none;
  border-radius: 5px;

  font-size: 27px;

  color: #fff;
  background-color: #52b6ff;
`;
