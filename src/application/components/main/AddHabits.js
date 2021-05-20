import styled from "styled-components";

export default function AddHabits({ setEnable }) {
  return (
    <CreateHabits>
      <Input placeholder="nome do hábito" />
      <Weekdays>
        <Day onClick={() => console.log("domingo")}>D</Day>
        <Day onClick={() => console.log("domingo")}>D</Day>
        <Day onClick={() => console.log("domingo")}>D</Day>
        <Day onClick={() => console.log("domingo")}>D</Day>
        <Day onClick={() => console.log("domingo")}>D</Day>
        <Day onClick={() => console.log("domingo")}>D</Day>
        <Day onClick={() => console.log("domingo")}>D</Day>
      </Weekdays>
      <PositionButton>
        <CancelButton onClick={() => setEnable(false)}>Cancelar</CancelButton>
        <SaveButton>Salvar</SaveButton>
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
`;
