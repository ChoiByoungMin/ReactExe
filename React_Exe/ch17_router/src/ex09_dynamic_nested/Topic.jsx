
import { useParams } from "react-router-dom";

function Topic({contents}){
    // 현재 컴포넌트가 라우팅된 변수값을 얻을 수 있다
    const params = useParams();
    const topic_id = params.topic_id;
    let selected_topic = {
        title: 'Sorry',
        description: 'Not Found'
    };
    for(let i=0;i<contents.length;i++){
        if(contents[i].id === Number(topic_id)){
            selected_topic = contents[i];
            break;
        }
    }
    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}

export default Topic;