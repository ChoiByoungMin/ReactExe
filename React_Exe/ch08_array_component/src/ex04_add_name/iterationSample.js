import { useState } from 'react';
 
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState('');

  // 현재 초기값의 마지막 id가 4이므로,다음 id는 5를 제공해야 하므로
  const [nextId, setNextId] = useState(5);
  
  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    // 새로 부여된 id와 입력데이터를 가져와서, names에 새로 추가
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    })
    setNextId(nextId +1);
    setNames(nextNames);
    setInputText("");
  }

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};
export default IterationSample;