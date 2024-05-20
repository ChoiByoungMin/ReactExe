import React, { Component } from 'react';
 
class ScrollBox extends Component {
    // 스크롤 바를 가장 아래로 내리도록 위치

    ScrollToBottom = () =>{

        // scrollTop 세로 스크롤바 위치
        // scrollHeight 스크롤이 있는 박스안의 div 높이
        // clientHeight 스크롤이 있는 박스의 높이

        const { scrollHeight, clientHeight } = this.box;

        /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
        다음 코드와 같은 의미입니다.
        const scrollHeight = this.box.scrollHeiight;
        const clientHeight = this.box..clientHeight;
        */
       this.box.scrollTop = scrollHeight - clientHeight;
    }
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };
 
    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }
 
    return (
      <div 
        style={style}
        ref={(ref) => {this.box=ref}}>
        <div style={innerStyle}/>
      </div>
    );
  }
}
 
export default ScrollBox;