import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import logo from "../../assets/Logo.png";

import Button from "./Button";
import Text from "./Text";
import Log from "./Log";
import UserContext from "../../contexts/UserContext";

export default function Login() {
  const [dataPost, setDataPost] = useState({});
  const [disabled, setDisabled] = useState(false);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  function LogInClick() {
    setDisabled(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      dataPost
    );
    promise.then((response) => {
      setUser(response.data);
      history.push("/hoje");
    });
    promise.catch(() => {
      setDisabled(false);
      alert("Erro no login!");
    });
  }

  return (
    <Log>
      <img src={logo} alt="Logo Trackit" />
      <Text
        type="text"
        placeholder="email"
        value={dataPost.email}
        disabled={disabled}
        onChange={(e) => setDataPost({ ...dataPost, email: e.target.value })}
      />
      <Text
        type="password"
        placeholder="senha"
        value={dataPost.password}
        disabled={disabled}
        onChange={(e) => setDataPost({ ...dataPost, password: e.target.value })}
      />
      <Button onClick={LogInClick}>
        {disabled ? (
          <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
        ) : (
          "Entrar"
        )}
      </Button>
      <Link to="/cadastro">
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </Log>
  );
}
