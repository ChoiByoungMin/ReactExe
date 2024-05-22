
import {useState} from 'react';

function Header(props){

  return (
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  )
  
}

function Nav(props){
  const lis = [];
  for(let i=0;i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
              <a id={t.id} href={"/read/" + t.id}
                onClick={event=>{
                  event.preventDefault();   
                  props.onChangeMode(Number(event.target.id));    
                }}>
                {t.title}
              </a>
            </li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Create(props){
  
  return (
    <article>
      <h2>Create</h2>
      {/* submit버튼을 누르면, form에서 onSubmit이 호출된다. */}
      <form onSubmit={event=>{
        event.preventDefault();   // 기본동작 막음(페이지 reload)
        const title = event.target.title.value;
        const body = event.target.body.value;

        // 부모영역에서 props를 통해 전달한 onCreate 함수를 호출함
        props.onCreate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='title'/></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type='submit' value="Create"/></p>
      </form>
    </article>
  );
}


function Update(props){

  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='title' value={title} 
                  onChange={event=>{
                    setTitle(event.target.value);
                  }}/></p>
        <p><textarea name='body' placeholder='body' value={body}
                  onChange={event=>{
                    setBody(event.target.value);
                  }}></textarea></p>
        <p><input type='submit' value="Update"/></p>
      </form>
    </article>
  );
}

export default function SubApp(){

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);       // nav의 어떤 항목(id)이 선택되었는지
  // 새로운 id발급, topics의 마지막 id가 3이므로, 새로운 id는 4부터 시작
  const [nextId, setNextId] = useState(4);  
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]);

  let content = null;
  let contextControl = null;
  
  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, Web'></Article>

  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0;i<topics.length;i++){
      console.log(id, typeof id);
      // 선택된 id와 같은 항목을 찾았으면
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }

    content = <Article title={title} body={body}></Article>
    contextControl = <li><a href={'/update/' + id} onClick={event=>{
      event.preventDefault();
      // UPDATE 모드로 전환
      setMode('UPDATE');
    }}>Update</a></li>

  }else if(mode === 'CREATE'){

    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id: nextId, title: _title, body: _body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics); 

      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }} />
  }else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0;i<topics.length;i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }

    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      
    }} />
  }

    return (
        <div>
          <Header title='WEB' onChangeMode={()=>{
            setMode('WELCOME');
          }} />
          <Nav topics={topics} onChangeMode={(id)=>{
            setMode('READ');
            setId(id);      // nav의 리스트중에 어떤 항목(id)이 선택되었는지 알 수 있음
          }} />
          {content}
          <ul>
            <li>
              <a href='/create' onClick={event=>{
                event.preventDefault();
                setMode('CREATE');
              }}>Create</a>
            </li>
            {contextControl}
          </ul>
        </div>
      );
}
