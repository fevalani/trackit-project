import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import logo from "../../assets/Logo.png";
import Button from "./Button";
import Text from "./Text";
import Log from "./Log";

export default function SignIn() {
  const [dataPost, setDataPost] = useState({});
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  function SignUp() {
    setDisabled(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      dataPost
    );

    promise.then(() => history.push("/"));
    promise.catch(() => {
      setDisabled(false);
      alert("Ocorreu um erro no cadastro!!");
    });
  }

  return (
    <Log>
      <img src={logo} alt="Logo Trackit" />
      <Text
        type="text"
        placeholder="email"
        disabled={disabled}
        value={dataPost.email}
        onChange={(e) => setDataPost({ ...dataPost, email: e.target.value })}
      />
      <Text
        type="text"
        placeholder="senha"
        disabled={disabled}
        value={dataPost.password}
        onChange={(e) => setDataPost({ ...dataPost, password: e.target.value })}
      />
      <Text
        type="text"
        placeholder="nome"
        disabled={disabled}
        value={dataPost.name}
        onChange={(e) => setDataPost({ ...dataPost, name: e.target.value })}
      />
      <Text
        type="text"
        placeholder="foto"
        disabled={disabled}
        value={dataPost.image}
        onChange={(e) => setDataPost({ ...dataPost, image: e.target.value })}
      />
      <Button type="button" onClick={SignUp}>
        {disabled ? (
          <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
        ) : (
          "Cadastrar"
        )}
      </Button>
      <Link to="/">
        <span>Já tem uma conta? Faça login!</span>
      </Link>
    </Log>
  );
}
