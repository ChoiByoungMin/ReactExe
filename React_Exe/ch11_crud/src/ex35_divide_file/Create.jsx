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

  export default Create;