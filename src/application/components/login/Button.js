import styled, { css } from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 45px;

  border: 1px solid #d4d4d4;
  border-radius: 5px;

  margin-bottom: 25px;

  font-size: 21px;

  color: #fff;
  background-color: #52b6ff;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.7;
      pointerevents: "none";
    `}
`;

export default Button;
