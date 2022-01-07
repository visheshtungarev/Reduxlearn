import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/StyledComponents/Button";
import Container from "../Components/StyledComponents/Container";
import Input from "../Components/StyledComponents/Input";
import Title from "../Components/StyledComponents/Title";
const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    //api call and we are getting response as

    let response = {
      firstname: "vishesh",
      user_id: "1234",
      address: " akjshd akjsjdlkjas lkjsdjal alksjda",
    };
    navigate("/dashboard", { state: { userName, password, ...response } });
  };
  return (
    <Container>
      <Title>Sign in to CodeWithVish</Title>
      <Input
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <Button onClick={handleLogin}>Sign In</Button>
      <h6>Forgot Password or ID </h6>
      <h6>Create New Account </h6>
    </Container>
  );
};

export default LoginPage;
