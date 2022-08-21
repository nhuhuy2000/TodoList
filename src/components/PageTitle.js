import React from "react";
import styled from "styled-components";
const Title = styled.p`
  display: inline-block;
  width: 100%;
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;
function PageTitle(props) {
  const { children, ...rest } = props;
  return <Title>{children}</Title>;
}

export default PageTitle;
