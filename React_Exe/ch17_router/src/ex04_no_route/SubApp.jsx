import Home from "./Home";
import Topics from "./Topics";
import Contact from "./Contact";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function SubApp(){
    return (
        // 주소와 컴포넌트 연결 기능인 route를 사용하는 하위 영역에는 반드시
        // <BrowserRouter>를 감싸줘야 한다.
        <BrowserRouter>
            <div>
                <h1>Hello React Router DOM</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/topics">Topics</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                {/* 각 <Route/>는 <Routes/>로 감싸줘야 한다. */}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/topics" element={<Topics/>} />
                    <Route path="/contact" element={<Contact/>} />
                    {/* 위에 주소와 연결된 컴포넌트를 제외한 나머지는 아래에서 모두 처리한다 */}
                    <Route path="/*" element={'Not Found'} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default SubApp;