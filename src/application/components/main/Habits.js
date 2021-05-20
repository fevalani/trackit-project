import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import Header from "../header-menu/Header";
import Menu from "../header-menu/Menu";
import AddHabits from "./AddHabits";
import HabitsList from "./HabitsList";

export default function Habits() {
  const { user } = useContext(UserContext);
  const [enable, setEnable] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    request.then((response) => setData(response.data));
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
        {data.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          <HabitsList data={data} />
        )}
      </Container>
      <Menu />
    </>
  );
}

const Container = styled.div`
  margin: 91px 0;
  padding-left: 16px;
  padding-right: 16px;

  width: 100%;

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
