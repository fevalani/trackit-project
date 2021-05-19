import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/font.css";

import Login from "./components/login/Login";
import SignIn from "./components/login/SignIn";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/cadastro" exact>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
