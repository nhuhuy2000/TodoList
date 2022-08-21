import PageTitle from "./components/PageTitle";
import styled from "styled-components";
import Main from "./components/Main";
import "./components/css/styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <PageTitle>TODO LIST</PageTitle>
      <Main></Main>
      <ToastContainer />
    </Wrapper>
  );
}

export default App;
