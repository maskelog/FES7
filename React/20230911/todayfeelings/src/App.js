import MenuList from "./Components/MenuList/MenuList";
import DisplayMood from "./Components/DisplayMood/DisplayMood";
import { useState } from "react";

function App() {

  const [CurrentMood, setCurrentMood] = useState('');
  return (
    <div>
      <h1>오늘의 기분을 선택해 주세요 😄</h1>
      <div>
        <MenuList setCurrentMood={setCurrentMood} />
        <DisplayMood mood={CurrentMood}/>
      </div>
    </div>
  );
}
export default App;