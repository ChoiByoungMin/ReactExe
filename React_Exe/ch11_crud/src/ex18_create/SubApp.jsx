
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
      <form>
        <p><input type='text' name='title' placeholder='title'/></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type='submit' value="Create"/></p>
      </form>
    </article>
  );
}

export default function SubApp(){

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);       // nav의 어떤 항목(id)이 선택되었는지
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]

  let content = null;
  
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

  }else if(mode === 'CREATE'){
    content = <Create></Create>
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
          <a href='/create' onClick={event=>{
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </div>
      );
}
