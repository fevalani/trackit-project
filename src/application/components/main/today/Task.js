import styled, { css } from "styled-components";
import { Checkbox } from "react-ionicons";
import { useContext, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import axios from "axios";

export default function Task({ item, setLoading }) {
  const { user } = useContext(UserContext);
  const [selected, setSelected] = useState(item);

  function checkbox(id) {
    const toggle = !selected.done;
    const sequence = selected.currentSequence;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    if (selected.done) {
      setSelected({ ...selected, done: toggle, currentSequence: sequence - 1 });
      const request = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        selected,
        config
      );
      request.then(() => {
        setLoading(true);
      });
      request.catch(() => {
        setSelected({ ...selected, done: toggle });
        alert("deuruimnopost");
        setLoading(true);
      });
    } else {
      setSelected({ ...selected, done: toggle, currentSequence: sequence + 1 });
      const request = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        selected,
        config
      );
      request.then(() => {
        setLoading(true);
      });
      request.catch(() => {
        setSelected({ ...selected, done: toggle });
        setLoading(true);
        alert("deuruimnopost");
      });
    }
  }

  return (
    <Tasks onClick={() => checkbox(item.id)}>
      <div>
        <Title>{item.name}</Title>
        <MiniText>
          Sequência atual:{" "}
          <Sequence selected={selected.done}>
            {selected.currentSequence}{" "}
            {item.currentSequence === 1 ? "dia" : "dias"}
          </Sequence>
        </MiniText>
        <MiniText>
          Seu recorde:{" "}
          <Record
            selected={
              selected.done && item.currentSequence === item.highestSequence
            }
          >
            {item.highestSequence} {item.highestSequence === 1 ? "dia" : "dias"}
          </Record>
        </MiniText>
      </div>
      <Checkbox
        color={selected.done ? "#8FC549" : "#EBEBEB"}
        height="69px"
        width="69px"
      />
    </Tasks>
  );
}

const Tasks = styled.li`
  width: 340px;
  height: 94px;

  background-color: #fff;
  border-radius: 5px;

  padding: 13px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;

  margin-bottom: 15px;
`;

const MiniText = styled.div`
  display: flex;
  font-size: 13px;

  margin-bottom: 3px;

  color: #666;
`;

const Sequence = styled.p`
  color: ${(props) => (props.selected ? "#8fc549" : "#666")};
  margin-left: 4px;
`;

const Record = styled.p`
  margin-left: 4px;
  ${(props) =>
    props.selected
      ? css`
          color: #8fc549;
        `
      : css`
          color: #666;
        `}
`;
