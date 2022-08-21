import React from "react";
import styled from "styled-components";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
const Wrapper = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
`;
function Main() {
  return (
    <Wrapper>
      <AppHeader></AppHeader>
      <AppContent />
    </Wrapper>
  );
}

export default Main;
