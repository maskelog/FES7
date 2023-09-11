import Hello from "./Components/Hello";
import HelloProps from "./Components/HelloProps";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

// 모듈문법의 특징
// import test, { test2 } from "./Components/text";

function App() {
  // test();
  // test2();

  return (
    <div>
      <Hello name="gary" />
      <Time />
      <HelloProps name="solo" age={20} someFunc={() => 'aswesome!!!'} someJSX={<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3, 4]} someObj={{ one: 1 }} />
      <Resume name="solo" hello="안녕하세요" Hobby='게임' Food='고기' color="red" />
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="skyblue"/>
    </div>
  );
}

export default App;