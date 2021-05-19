import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

import lula from "../../assets/evfQlSZ__400x400.jpg";

export default function Header() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <Head>
      <Title>TrackIt</Title>
      <Avatar src={lula} alt="avatar usuário" />
    </Head>
  );
}

const Head = styled.div`
  width: 100%;
  height: 70px;
  padding: 8px 18px;

  background-color: #126ba5;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Title = styled.p`
  font-family: "Playball", cursive;
  font-size: 37px;

  color: #fff;
`;

const Avatar = styled.img`
  width: 51px;
  height: 51px;

  border-radius: 50%;
`;
