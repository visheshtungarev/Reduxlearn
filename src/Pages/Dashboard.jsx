import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Block from "../Components/StyledComponents/Blocks";
import Button from "../Components/StyledComponents/Button";
import Container from "../Components/StyledComponents/Container";
import Title from "../Components/StyledComponents/Title";

const Dashboard = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  return (
    <Container justify="flex-start">
      <Header username={state.userName} />
      <Title>{`Hello ${state.userName}`}</Title>
      <Block width="50vw" height={"60vh"} background={"#ffffff"} />
      <Button onClick={() => navigate("/profile", { state: { ...state } })}>
        Profile
      </Button>
    </Container>
  );
};

export default Dashboard;
