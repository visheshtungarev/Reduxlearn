import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Block from "../Components/StyledComponents/Blocks";

import Container from "../Components/StyledComponents/Container";
import Title from "../Components/StyledComponents/Title";

const Profile = (props) => {
  const location = useLocation();

  const { state } = location;
  console.log("state", state);
  return (
    <Container justify="flex-start">
      <Header username={state.userName} />
      <Block
        background="#E8F6F5"
        width={"90vw"}
        height={"70vh"}
        align="center"
        justify="center"
      >
        <Title>{state.userName}</Title>
        <Title>{state.user_id}</Title>
        <Title>{state.address}</Title>
      </Block>
    </Container>
  );
};

export default Profile;
