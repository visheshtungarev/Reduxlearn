import styled from "styled-components";

const RowContainer = styled.div`
  display: flex;

  align-items: ${(props) => props.aligned || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  background-color: #333333;
  flex-direction: row;
  padding: 0.5rem;
  min-width: 100%;
  h6 {
    color: #06c;
    margin: 0.3rem;
  }
`;

export default RowContainer;
