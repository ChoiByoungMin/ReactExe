
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

function Nav(){
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
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
    return (
        <div>
          <Header title='WEB' />
          <Nav/>
          <Article title='Welcome' body='Hello, Web' />
        </div>
      );
}
