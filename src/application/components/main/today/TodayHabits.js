import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import UserContext from "../../../contexts/UserContext";
import Loader from "react-loader-spinner";

import Header from "../../header-menu/Header";
import Menu from "../../header-menu/Menu";
import Task from "./Task";
import PercentContext from "../../../contexts/PercentContext";

export default function TodayHabits() {
  const { user } = useContext(UserContext);
  const { percent, setPercent } = useContext(PercentContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const currentDate = dayjs().locale("pt-br").format("dddd, DD/MM");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    request.then((response) => {
      setLoading(false);
      setData(response.data);
      const counter =
        (100 * response.data.filter((item) => item.done).length) /
        response.data.length;
      setPercent(counter.toFixed(0));
    });
    request.catch(() => alert("deruim"));
  }, [loading]);

  return (
    <>
      <Header />
      <TopContainer selected={percent === "0"}>
        <p>{currentDate}</p>
        <div>
          {percent === "0"
            ? "Nenhum hábito concluído ainda"
            : `${percent}% dos hábitos concluídos`}
        </div>
      </TopContainer>
      {data.length === 0 ? (
        <PositionLoader>
          <Loader type="ThreeDots" color="#52B6FF" height={30} width={90} />
        </PositionLoader>
      ) : (
        <TasksContainer>
          {data.map((item, i) => (
            <Task
              setLoading={setLoading}
              key={item.id}
              item={item}
              data={data}
            />
          ))}
        </TasksContainer>
      )}

      <Menu />
    </>
  );
}

const TopContainer = styled.div`
  width: 100%;

  padding: 0 16px;
  margin-top: 98px;
  margin-bottom: 28px;

  p {
    margin-bottom: 5px;
    font-size: 23px;
    color: #126ba5;
  }

  div {
    font-size: 18px;
    ${(props) =>
      props.selected
        ? css`
            color: #bababa;
          `
        : css`
            color: #8fc549;
          `}
  }
`;

const TasksContainer = styled.ul`
  width: 100%;

  padding: 0 17px;
  margin-bottom: 111px;
`;

const PositionLoader = styled.div`
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
