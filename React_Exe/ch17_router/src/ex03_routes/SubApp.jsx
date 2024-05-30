import Home from "./Home";
import Topics from "./Topics";
import Contact from "./Contact";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function SubApp(){
    return (
        <BrowserRouter>
            <div>
                <h1>Hello React Router DOM</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/topics">Topics</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/topics" element={<Topics/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default SubApp;