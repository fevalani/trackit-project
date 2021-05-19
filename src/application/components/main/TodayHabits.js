import Header from "../header-menu/Header";
import Menu from "../header-menu/Menu";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";

export default function TodayHabits() {
  const { user, setUser } = useContext(UserContext);
  return (
    <Body>
      <Header user={user} />
      <Menu />
    </Body>
  );
}

const Body = styled.div`
  background-color: #e5e5e5;
`;
