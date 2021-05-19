import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/Logo.png";
import Button from "./Button";
import Text from "./Text";
import Log from "./Log";

export default function SignIn() {
  const [dataPost, setDataPost] = useState({});
  console.log(dataPost);

  return (
    <Log>
      <img src={logo} alt="Logo Trackit" />
      <Text
        type="text"
        placeholder="email"
        value={dataPost.email}
        onChange={(e) => setDataPost({ ...dataPost, email: e.target.value })}
      />
      <Text
        type="text"
        placeholder="senha"
        value={dataPost.password}
        onChange={(e) => setDataPost({ ...dataPost, password: e.target.value })}
      />
      <Text
        type="text"
        placeholder="nome"
        value={dataPost.name}
        onChange={(e) => setDataPost({ ...dataPost, name: e.target.value })}
      />
      <Text
        type="text"
        placeholder="foto"
        value={dataPost.image}
        onChange={(e) => setDataPost({ ...dataPost, image: e.target.value })}
      />
      <Button type="button">Cadastrar</Button>
      <Link to="/">
        <span>Já tem uma conta? Faça login!</span>
      </Link>
    </Log>
  );
}
