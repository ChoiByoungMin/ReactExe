
// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용한다.
function Header(props){

  return (
    <header>
      <h1>
        <a href="/" onClick={function(event){
          event.preventDefault();     // 원래 <a>의 기본 기능을 막는다.
          props.onChangeMode();       // onChangeMode에 전달된 함수가 호출된다.
        }}>{props.title}</a>
      </h1>
    </header>
  )
  
}

function Nav(props){
  // props로부터 받은 데이터를 <li></li>로 만들어서 lis에 저장
  const lis = [];
  for(let i=0;i<props.topics.length;i++){
    let t = props.topics[i];    // 부모로부터 전달된 객체를 1개씩 추출
    lis.push(<li key={t.id}><a href={"/read/" + t.id}>{t.title}</a></li>);
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

export default function SubApp(){

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]

    return (
        <div>
          {/* Header의 props로 title과 onChanageMode가 변수로 전달된다 */}
          <Header title='WEB' onChangeMode={function(){
            alert('Header');
          }} />
          <Nav topics={topics}/>
          <Article title='Welcome' body='Hello, Web' />
        </div>
      );
}
