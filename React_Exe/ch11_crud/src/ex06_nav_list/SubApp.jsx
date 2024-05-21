
// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용한다.
function Header(props){

  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  )
  
}

function Nav(props){
  // props로부터 받은 데이터를 <li></li>로 만들어서 lis에 저장
  const lis = [];

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

export default function SubApp(){

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]

    return (
        <div>
          <Header title='WEB' />
          <Nav topics={topics}/>
          <Article title='Welcome' body='Hello, Web' />
        </div>
      );
}
