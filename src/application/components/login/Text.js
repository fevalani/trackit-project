import styled, { css } from "styled-components";

const Text = styled.input`
  width: 100%;
  height: 45px;

  border: 1px solid #d4d4d4;
  border-radius: 5px;

  margin-bottom: 6px;
  padding: 6px;

  font-size: 15px;

  ::placeholder {
    font-size: 20px;
    color: #dbdbdb;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f2f2f2;
      opacity: 0.7;
      pointerevents: "none";
    `}
`;

export default Text;
