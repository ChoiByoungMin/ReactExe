import { NavLink, Routes, Route } from "react-router-dom";

function Topics(){
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><NavLink to="/topics/1">HTML</NavLink></li>
                <li><NavLink to="/topics/2">CSS</NavLink></li>
                <li><NavLink to="/topics/3">React</NavLink></li>
            </ul>
            <Routes>
                <Route path="/1" element={"HTML is ..."} />
                <Route path="/2" element={"CSS is ..."} />
                <Route path="/3" element={"React is ..."} />
            </Routes>
        </div>
    )
}

export default Topics;