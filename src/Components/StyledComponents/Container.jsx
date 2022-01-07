import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1;
  align-items: ${(props) => props.aligned || "center"};
  justify-content: ${(props) => props.justify || "center"};
  background-color: #ffffff;
  min-height: 100vh;
  max-height: 100vh;
  flex-direction: column;
  h6 {
    color: #06c;
    margin: 0.3rem;
  }
`;

export default Container;
