import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import Header from "../header-menu/Header";
import Menu from "../header-menu/Menu";

export default function TodayHabits() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Header />
      <TopContainer>
        <Title>Segunda, 17/05</Title>
        <CounterText>Nenhum hábito concluído ainda</CounterText>
      </TopContainer>
      <Menu />
    </>
  );
}

const TopContainer = styled.div`
  width: 100%;

  padding: 0 16px;
  margin-top: 98px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 23px;
  color: #126ba5;
`;

const CounterText = styled.div`
  font-size: 18px;
  color: #bababa;
`;
