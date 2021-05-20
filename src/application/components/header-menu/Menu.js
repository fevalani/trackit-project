import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {
  return (
    <>
      <ContainerMenu>
        <Link to="/habitos">
          <MenuButton>Hábitos</MenuButton>
        </Link>
        <Link to="/historico">
          <MenuButton>Histórico</MenuButton>
        </Link>
      </ContainerMenu>
      <Link to="/hoje">
        <CircularButton>
          <CircularProgressbar
            value={75}
            text={"Hoje"}
            backgroundPadding={6}
            background
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </CircularButton>
      </Link>
    </>
  );
}

const ContainerMenu = styled.div`
  width: 100%;
  height: 70px;
  padding: 6px 31px;

  background-color: #fff;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.p`
  font-size: 18px;
  color: #52b6ff;
  cursor: pointer;
`;

const CircularButton = styled.div`
  width: 91px;

  position: fixed;
  left: calc(50vw - 91px / 2);
  bottom: 10px;
  z-index: 11;

  cursor: pointer;
`;
