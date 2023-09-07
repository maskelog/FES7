import React, { useState } from 'react';
import './App.css';

function App() {
  // 예제 데이터 객체
  const data = {
    date: new Date() // 현재 날짜와 시간으로 초기화
  };

  // 출력할 데이터의 상태
  const [outputData, setOutputData] = useState(null);

  // 버튼을 클릭했을 때의 핸들러
  const handleButtonClick = () => {
    setOutputData(data.date);
  }

  return (
    <div tabIndex="">
      <h1 className="newClass">안녕, 라이캣! 1호</h1>
      <h1>안녕, 라이언 2호!</h1>
      <input className='button' type='button' value='날짜 및 시간 출력' onClick={handleButtonClick}/>
      {outputData && (
        <div className='time'>
          <span style={{ color: 'red' }}>년:  {outputData.getFullYear()}</span>
          <br />
          <span>월/일: {outputData.getMonth() + 1}/{outputData.getDate()}</span>
          <br />
          시간 : {outputData.getHours()}시 {outputData.getMinutes()}분 {outputData.getSeconds()}초
        </div>
      )}
    </div>
  );
}

export default App;