import { Link } from "react-router-dom";

import logo from "../../assets/Logo.png";
import styled from "styled-components";

export default function SignIn() {
  return (
    <Log>
      <Logo src={logo} />
      <Text type="text" placeholder="email" />
      <Text type="text" placeholder="senha" />
      <Text type="text" placeholder="nome" />
      <Text type="text" placeholder="foto" />
      <Button type="button" value="Cadastrar" />
      <Link to="/">
        <a>Já tem uma conta? Faça login!</a>
      </Link>
    </Log>
  );
}

const Log = styled.div`
  width: 303px;

  margin: 68px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 180px;

  margin-bottom: 32px;
`;

const Text = styled.input`
  width: 100%;
  height: 45px;

  border: 1px solid #d4d4d4;
  border-radius: 5px;

  margin-bottom: 6px;

  ::placeholder {
    font-size: 20px;
    color: #dbdbdb;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 45px;

  border: 1px solid #d4d4d4;
  border-radius: 5px;

  margin-bottom: 25px;

  color: #fff;
  background-color: #52b6ff;
`;
