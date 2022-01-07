import styled from "styled-components";

const Title = styled.h1`
  font-size: 21px;
  line-height: 1.38105;
  font-weight: 400;
  letter-spacing: 0.011em;
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

export default Title;
