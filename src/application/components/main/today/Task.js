import styled, { css } from "styled-components";
import { Checkbox } from "react-ionicons";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import axios from "axios";

export default function Task({ item, setLoading }) {
  const { user } = useContext(UserContext);

  function checkbox(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    if (item.done) {
      const request = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        item,
        config
      );
      request.then(() => {
        setLoading(true);
      });
      request.catch(() => alert("deuruimnopost"));
    } else {
      const request = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        item,
        config
      );
      request.then(() => {
        setLoading(true);
      });
      request.catch(() => alert("deuruimnopost"));
    }
  }

  return (
    <Tasks onClick={() => checkbox(item.id)}>
      <div>
        <Title>{item.name}</Title>
        <MiniText>
          Sequência atual:{" "}
          <Sequence selected={item.done}>
            {item.currentSequence} {item.currentSequence === 1 ? "dia" : "dias"}
          </Sequence>
        </MiniText>
        <MiniText>
          Seu recorde:{" "}
          <Record
            selected={
              item.done && item.currentSequence === item.highestSequence
            }
          >
            {item.highestSequence} {item.highestSequence === 1 ? "dia" : "dias"}
          </Record>
        </MiniText>
      </div>
      <Checkbox
        color={item.done ? "#8FC549" : "#EBEBEB"}
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
