import axios from "axios";
import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import UserContext from "../../contexts/UserContext";
import Loader from "react-loader-spinner";

export default function AddHabits({ setEnable }) {
  const { user } = useContext(UserContext);
  const [post, setPost] = useState({ name: "", days: [] });
  const [disabled, setDisabled] = useState(false);

  function createHabit() {
    setDisabled(true);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      post,
      config
    );

    request.then(() => {
      alert("Deu bom");
      setPost({ name: "", days: [] });
      setEnable(false);
      setDisabled(false);
    });
    request.catch(() => {
      alert("Erro");
      setDisabled(false);
    });
  }

  function dayArray(num) {
    let array;
    if (post.days.length === 0) {
      array = [num];
    } else {
      if (post.days.includes(num)) {
        array = post.days.filter((i) => i !== num);
      } else {
        array = [...post.days, num];
      }
    }
    setPost({ ...post, days: array });
  }

  return (
    <CreateHabits>
      <Input
        placeholder="nome do hábito"
        onChange={(e) => setPost({ ...post, name: e.target.value })}
        disabled={disabled}
      />
      <Weekdays>
        <Day
          id="7"
          list={post.days}
          onClick={() => dayArray(7)}
          disabled={disabled}
        >
          D
        </Day>
        <Day
          id="1"
          list={post.days}
          onClick={() => dayArray(1)}
          disabled={disabled}
        >
          S
        </Day>
        <Day
          id="2"
          list={post.days}
          onClick={() => dayArray(2)}
          disabled={disabled}
        >
          T
        </Day>
        <Day
          id="3"
          list={post.days}
          onClick={() => dayArray(3)}
          disabled={disabled}
        >
          Q
        </Day>
        <Day
          id="4"
          list={post.days}
          onClick={() => dayArray(4)}
          disabled={disabled}
        >
          Q
        </Day>
        <Day
          id="5"
          list={post.days}
          onClick={() => dayArray(5)}
          disabled={disabled}
        >
          S
        </Day>
        <Day
          id="6"
          list={post.days}
          onClick={() => dayArray(6)}
          disabled={disabled}
        >
          S
        </Day>
      </Weekdays>
      <PositionButton>
        <CancelButton onClick={() => setEnable(false)}>Cancelar</CancelButton>
        <SaveButton onClick={createHabit}>
          {disabled ? (
            <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
          ) : (
            "Salvar"
          )}
        </SaveButton>
      </PositionButton>
    </CreateHabits>
  );
}

const CreateHabits = styled.div`
  width: 340px;
  height: 180px;

  margin-bottom: 29px;
  padding: 18px;

  background-color: #fff;

  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;

  border-radius: 5px;
  border: 1px solid #d4d4d4;

  margin-bottom: 10px;
  padding: 9px;

  font-size: 16px;

  ::placeholder {
    font-size: 20px;
    color: #dbdbdb;
  }

  ${(props) => {
    props.disabled &&
      css`
        background-color: #f2f2f2;
        opacity: 0.7;
        pointerevents: "none";
      `;
  }}
`;

const Weekdays = styled.ul`
  width: 100%;
  height: 30px;

  margin-bottom: 29px;

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

  background-color: #fff;
  color: #dbdbdb;

  ${(props) => {
    props.disabled &&
      css`
        pointerevents: "none";
      `;
  }}

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

const PositionButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CancelButton = styled.span`
  font-size: 16px;
  color: #52b6ff;
`;

const SaveButton = styled.button`
  width: 84px;
  height: 35px;

  margin-left: 23px;

  border: none;
  border-radius: 5px;

  color: #fff;
  font-size: 16px;

  background-color: #52b6ff;

  display: flex;
  justify-content: center;
  align-items: center;
`;
