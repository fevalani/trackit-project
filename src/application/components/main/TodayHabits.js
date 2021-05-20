import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import Header from "../header-menu/Header";
import Menu from "../header-menu/Menu";

export default function TodayHabits() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Header />
      <Menu />
    </>
  );
}
