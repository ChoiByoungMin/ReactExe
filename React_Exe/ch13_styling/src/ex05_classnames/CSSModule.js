import styles from "./CSSModule.module.css";
import classNames from "classnames/bind";

// classnames모듈을 사용해서, styles의 css를 받아서 저장하도록 한다.
const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
