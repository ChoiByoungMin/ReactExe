import { createContext } from "react";

/* 
리액트의 Context영역(전역 영역-모든 컴포넌트가 접근 가능)에
theme1과 theme2를 저장하였다.
themeContext1과 themeContext2를 이용해서 
어느 컴포넌트에서나 꺼내어 사용할 수 있다.
*/

/* Context-API를 지나치게 사용하면
   여러 컴포넌트들이 context에 의해 연결되므로   
   리액트 컴포넌트의 독립성/모듈화를 방해하고
   설계상 구조화를 저해한다.

   하지만 특정 데이터를 계층 구조로 계속 전달하는 방식도 또한
   불편하고, 번거로운 일이므로 Context-API를 적절히 사용하는 것은
   필요한 일이라고 할 수 있다.
 */

const theme1 = {border: '10px solid gold'};
const themeContext1 = createContext(theme1);

const theme2 = {border: '10px solid blue'};
const themeContext2 = createContext(theme2);

export {themeContext1, themeContext2};