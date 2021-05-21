import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import UserContext from "../../../contexts/UserContext";

import Loader from "react-loader-spinner";

import Header from "../../header-menu/Header";
import Menu from "../../header-menu/Menu";
import AddHabits from "./AddHabits";
import HabitsList from "./HabitsList";

export default function Habits() {
  const { user } = useContext(UserContext);
  const [enable, setEnable] = useState(false);
  const [data, setData] = useState([]);
  const [postAddHabits, setPostAddHabits] = useState({ name: "", days: [] });
  const [loading, setLoading] = useState(true);

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

    request.then((response) => {
      setData(response.data);
      setLoading(false);
    });
    request.catch(() => console.log("deuruimnoget"));
  }, [loading]);

  return (
    <>
      <Header />
      <Container>
        <TopContainer enable={enable}>
          <Title>Meus hábitos</Title>
          <Button onClick={() => setEnable(true)}>+</Button>
        </TopContainer>
        {enable ? (
          <AddHabits
            setLoading={setLoading}
            setEnable={setEnable}
            post={postAddHabits}
            setPost={setPostAddHabits}
          />
        ) : (
          ""
        )}
        {loading ? (
          <PositionLoader>
            <Loader type="ThreeDots" color="#52B6FF" height={30} width={90} />
          </PositionLoader>
        ) : data.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          <HabitsList setLoading={setLoading} data={data} />
        )}
      </Container>
      <Menu />
    </>
  );
}

const Container = styled.div`
  margin: 91px 0 111px;
  padding-left: 16px;
  padding-right: 16px;

  width: 100%;

  > p {
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

const PositionLoader = styled.div`
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
