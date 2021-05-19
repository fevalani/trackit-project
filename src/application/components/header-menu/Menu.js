import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {
  return (
    <ContainerMenu>
      <MenuButton>Hábitos</MenuButton>
      <CircularProgressbar value={75} text={"Hoje"} />
      <MenuButton>Histórico</MenuButton>
    </ContainerMenu>
  );
}

const ContainerMenu = styled.div`
  width: 100%;
  height: 70px;

  background-color: #fff;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
`;

const MenuButton = styled.p`
  font-size: 18px;
  color: #52b6ff;
`;
