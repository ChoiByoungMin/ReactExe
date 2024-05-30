import { NavLink, Routes, Route } from "react-router-dom";
import Topic from "./Topic";

const contents = [
    {id:1, title:'HTML', description: 'HTML is ...'},
    {id:2, title:'CSS', description: 'CSS is ...'},
    {id:3, title:'React', description: 'React is ...'},
];

function Topics(){
    let lis = [];
    for(let i=0;i<contents.length;i++){
        lis.push(
            <li>
                <NavLink to={"/topics/" + contents[i].id}>
                    {contents[i].title}
                </NavLink>
            </li>
        )
    }

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {lis}
            </ul>
            <Routes>
                {/* topic_id라는 이름으로 <Topic/>에서 꺼내어 쓸 수 있도록 하겠다 */}
                <Route path="/:topic_id" element={<Topic contents={contents}/>} />
            </Routes>
        </div>
    )
}

export default Topics;