import styled from "styled-components";

const Block = styled.div`
  height: ${(props) => props.height || "2rem"};
  width: ${(props) => props.width || "2rem"};
  background-color: ${(props) => props.background || "#D6D6D6"};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export default Block;
