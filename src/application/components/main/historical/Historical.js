import styled from "styled-components";
import Header from "../../header-menu/Header";
import Menu from "../../header-menu/Menu";

export default function Historical() {
  return (
    <>
      <Header />
      <TopContainer>
        <p>Histórico</p>
      </TopContainer>
      <Container>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </Container>
      <Menu />
    </>
  );
}

const TopContainer = styled.div`
  width: 100%;

  padding: 0 16px;
  margin-top: 98px;
  margin-bottom: 28px;

  p {
    margin-bottom: 5px;
    font-size: 23px;
    color: #126ba5;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 16px;
`;
