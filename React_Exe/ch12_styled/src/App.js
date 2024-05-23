import logo from "./logo.svg";
import "./App.css";
import ReactButton from "./ex01_non_styled/ReactButton";
import StyledButton from "./ex02_styled/StyledButton";
// import SimpleButton from "./ex03_styled/SimpleButton";
import SimpleButton from "./ex04_styled/SimpleButton";

function App() {
  return (
    <>
      <ReactButton>안녕하세요</ReactButton>
      <StyledButton>감사합니다</StyledButton>
      <SimpleButton>행복합니다</SimpleButton>
    </>
  );
}

export default App;
