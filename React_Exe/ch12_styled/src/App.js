import logo from "./logo.svg";
import "./App.css";
import ReactButton from "./ex01_non_styled/ReactButton";
import StyledButton from "./ex02_styled/StyledButton";
// import SimpleButton from "./ex03_styled/SimpleButton";
import SimpleButton from "./ex04_styled/SimpleButton";
import LargeButton from "./ex05_styled/LargeButton";
// import PrimaryButton from "./ex06_styled/PrimaryButton";
// import PrimaryButton from "./ex07_styled/PrimaryButton";
import PrimaryButton from "./ex08_styled/PrimaryButton";
import SecondButton from "./ex09_styled/SecondButton";

function App() {
  return (
    <>
      <ReactButton>안녕하세요</ReactButton>
      <StyledButton>감사합니다</StyledButton>
      <SimpleButton>행복합니다</SimpleButton>
      <LargeButton>존경합니다</LargeButton>
      <PrimaryButton>사랑합니다</PrimaryButton>
      <PrimaryButton primary>즐겁습니다</PrimaryButton>
      <SecondButton>Happy Happy</SecondButton>
      <SecondButton primary>Congraturation!</SecondButton>
    </>
  );
}

export default App;
