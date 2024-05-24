import logo from "./logo.svg";
import "./App.css";

// import SassComponent from "./ex02_sass/SassComponent";
// import CSSModule from "./ex04_css_module/CSSModule";
import MyComponent from "./ex05_classnames/MyComponent";
import CSSModule from "./ex05_classnames/CSSModule";

function App() {
  return (
    <div>
      {/* <SassComponent /> */}
      {/* <CSSModule /> */}
      <MyComponent />
      <CSSModule />
    </div>
  );
}

export default App;
