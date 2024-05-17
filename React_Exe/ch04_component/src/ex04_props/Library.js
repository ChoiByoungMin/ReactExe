import Book from "./Book";

function Library(props) {
  return (
    <div>
      <h1>{props.title} 도서관</h1>
      <Book name="대학" numOfPage={10} />
      <Book name="논어" numOfPage={300} />
      <Book name="맹자" numOfPage={600} />
      <Book name="중용" numOfPage={50} />
      <Book name="채근담" numOfPage={250} />
    </div>
  );
}

export default Library;
