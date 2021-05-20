import styled, { css, keyframes } from "styled-components";
import { TrashOutline } from "react-ionicons";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function HabitsList({ data }) {
  const { user } = useContext(UserContext);
  const [showDeleteButton, setShowDeleteButton] = useState([]);

  function deleteTask(item) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const request = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}`,
      config
    );

    request.then(() => {
      console.log("Excluiu");
    });
    request.catch(() => {
      console.log("deu ruim");
    });
  }

  return data.map((item) => (
    <ContainerHabits key={item.id}>
      <PositionTopHabits>
        <Input>{item.name}</Input>
        {showDeleteButton === item.id ? (
          <Button onClick={() => deleteTask(item.id)}>Deletar?</Button>
        ) : (
          <TrashOutline
            onClick={() => {
              setShowDeleteButton(item.id);
              setTimeout(() => setShowDeleteButton([]), 4000);
            }}
            color="#666666"
            height="20px"
            width="20px"
          />
        )}
      </PositionTopHabits>
      <Weekdays>
        <Day id="7" list={item.days}>
          D
        </Day>
        <Day id="1" list={item.days}>
          S
        </Day>
        <Day id="2" list={item.days}>
          T
        </Day>
        <Day id="3" list={item.days}>
          Q
        </Day>
        <Day id="4" list={item.days}>
          Q
        </Day>
        <Day id="5" list={item.days}>
          S
        </Day>
        <Day id="6" list={item.days}>
          S
        </Day>
      </Weekdays>
    </ContainerHabits>
  ));
}

const ContainerHabits = styled.div`
  width: 340px;
  height: 91px;

  margin-bottom: 10px;
  padding: 15px;

  background-color: #fff;

  border-radius: 5px;
`;

const PositionTopHabits = styled.div`
  display: flex;
  justify-content: space-between;

  overflow-x: hidden;
`;

const Input = styled.div`
  width: 100%;

  margin-bottom: 10px;

  font-size: 20px;
`;

const Weekdays = styled.ul`
  width: 100%;
  height: 30px;

  display: flex;
`;

const Day = styled.li`
  width: 30px;
  height: 30px;
  margin-right: 4px;

  border: 1px solid #d4d4d4;
  border-radius: 5px;

  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    props.list.includes(parseInt(props.id))
      ? css`
          background-color: #fff;
          color: #dbdbdb;
        `
      : css`
          background-color: #dbdbdb;
          color: #fff;
        `;
  }}
`;

const fadeIn = keyframes`
  0% {
        opacity: 0;
        transform: translateX(80px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Button = styled.button`
  background-color: #e3202a;
  color: #fff;
  height: 25px;

  border: none;
  border-radius: 5px;

  animation: ${fadeIn} 0.2s linear;
`;
