import logo from "./logo.svg";
import "./App.css";
import WelcomeDialog from "./ex01_containment/WelcomeDialog";
import WelcomeDesc from "./ex01_containment/WelcomeDesc";
import SplitPane from "./ex02_containment/SplitPane";
import AlarmDialog from "./ex03_specialization/AlarmDialog";
import ProfileCard from "./ex04_inheritance/ProfileCard";

function App() {
  return (
    // <div className="App">
    //   <WelcomeDialog />
    //   <hr />
    //   <WelcomeDesc />
    //   <hr />
    //   {/* children이 여러개일 경우 props의 속성이름을 여러개 지정해준다 */}
    //   <SplitPane left={<WelcomeDesc />} right={<WelcomeDialog />} />
    //   <hr />
    //   <AlarmDialog />
    // </div>
    <ProfileCard />
  );
}

export default App;
