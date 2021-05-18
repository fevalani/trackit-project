import { Link } from "react-router-dom";

import logo from "../../assets/Logo.png";
import styled from "styled-components";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  return (
    <Log>
      <Logo src={logo} />
      <Text
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text
        type="password"
        placeholder="senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="button" value="Entrar" />
      <Link to="/cadastro">
        <TextSignIn>Não tem uma conta? Cadastre-se!</TextSignIn>
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
  padding-left: 11px;

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

  text-align: center;
  font-size: 21px;

  background-color: #52b6ff;
  color: #fff;
`;

const TextSignIn = styled.div`
  font-size: 14px;
`;
