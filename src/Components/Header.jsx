import React from "react";
import Block from "./StyledComponents/Blocks";

import RowContainer from "./StyledComponents/RowContainer";
import Title from "./StyledComponents/Title";
const Header = (props) => {
  const { username } = props;
  return (
    <RowContainer direction="row">
      <Block />
      <Block width={"50vw"} />

      <Block width={"10vw"} />
      <Title color={"#D6D6D6"}>Welcome,{username}</Title>
    </RowContainer>
  );
};

export default Header;
