import React from 'react'
import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"
// 태그드 탬플릿 리터럴을 사용하여 함수를 사용하는 기법
// createGlobalStyle 함수를 사용하여 전역스타일 이용하기
const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}

export default App;

