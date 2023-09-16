import React, { useState } from 'react';
import './Components/css/App.css';
import Modal from './Components/Modal';

function App() {
  const [skill, setSkill] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [days, setDays] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateDays = () => {
    const totalHours = 10000;
    const daysRequired = totalHours / hoursPerDay;
    setDays(daysRequired);
  };

  return (
    <div className="App">
      <h1>1만 시간의 법칙</h1>
      
      <p>나는 
        <input type="text" placeholder="예)프로그래밍" value={skill} onChange={e => setSkill(e.target.value)} /> 
        전문가가 될 것이다.
      </p>
      
      <p>그래서 앞으로 매일 하루에 
        <input type="number" value={hoursPerDay} onChange={e => setHoursPerDay(e.target.value)} /> 
        시간씩 훈련할 것이다.
      </p>
      
      <button onClick={calculateDays}>나는 며칠동안 훈련을 해야 1만 시간이 될까</button>
      {days && <p>당신은 {skill} 전문가가 되기 위해서 대략 {Math.ceil(days)}일 이상 훈련하셔야 합니다.</p>}

      <button onClick={() => setIsModalOpen(true)}>훈련하러 가기 GO! GO!</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
