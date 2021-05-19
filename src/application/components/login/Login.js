import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/Logo.png";

import Button from "./Button";
import Text from "./Text";
import Log from "./Log";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  return (
    <Log>
      <img src={logo} alt="Logo Trackit" />
      <Text
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text
        type="password"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button>Entrar</Button>
      <Link to="/cadastro">
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </Log>
  );
}
