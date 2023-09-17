import React, { useState } from 'react';
import {
  MainContainer,
  HeaderContainer,
  TitleImage,
  ClockImage,
  InspirationalText,
  InputContainer,
  OutputContainer,
  RuleDescription,
  Button,
} from './MainStyle.jsx';
import Modal from '../Modal/Modal';
import {FontStyles} from '../../style/style.js';
import titleImageSource from '../../assets/title.png';
import clockImageSource from '../../assets/clock.png';

function Main() {
  const [skill, setSkill] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [days, setDays] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalculateButtonVisible, setIsCalculateButtonVisible] = useState(false);

  const calculateDays = () => {
    const totalHours = 10000;
    const daysRequired = totalHours / hoursPerDay;
    setDays(daysRequired);
    setIsCalculateButtonVisible(false);
  };

  const handleCalculateButtonClick = () => {
    setIsCalculateButtonVisible(true);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <ClockImage src={clockImageSource} alt="Clock Background" />
        <TitleImage src={titleImageSource} alt="1만 시간의 법칙" />
        <h1 style={{ display: 'none' }}>1만 시간의 법칙</h1>
      </HeaderContainer>
      <InspirationalText>
        "연습은 어제의 당신보다 당신을 더 낫게 만든다."
      </InspirationalText>

      <RuleDescription>
      <p>
        <FontStyles.Strong>1만 시간의 법칙</FontStyles.Strong>은 <br />
        어떤 분야의 전문가가 되기 위해서는<br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
      </RuleDescription>

      <InputContainer>
        <p>
          나는
          <input
            type="text"
            placeholder="예)프로그래밍"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          전문가가 될 것이다.
        </p>

        <p>
          그래서 앞으로 매일 하루에
          <input
            type="number"
            placeholder="예)5"
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(e.target.value)}
          />
          시간씩 훈련할 것이다.
        </p>
      </InputContainer>

      {isCalculateButtonVisible && (
        <button onClick={calculateDays}>
          나는 며칠동안 훈련을 해야 1만 시간이 될까?
        </button>
      )}

      {!isCalculateButtonVisible && (
        <button onClick={handleCalculateButtonClick}>
          나는 며칠동안 훈련을 해야 1만 시간이 될까?
        </button>
      )}

      <OutputContainer>
      {days && (
        <p>당신은 <FontStyles.Strong>{skill}</FontStyles.Strong> 전문가가 되기 위해서<br/> 
        대략 <FontStyles.Strong>{Math.ceil(days)}</FontStyles.Strong>일 이상 훈련하셔야 합니다 :)</p>
      )}
      </OutputContainer>


      <button onClick={() => setIsModalOpen(true)}>훈련하러 가기 GO! GO!</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </MainContainer>
  );
}

export default Main;