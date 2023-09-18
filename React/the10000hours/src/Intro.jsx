import React from 'react';
import { Quotes, StyledIntro } from './IntroStyle';
import { FontStyles } from './style';

const Intro = () => {
  return <StyledIntro>
    <FontStyles.Italic >"연습은 어제의 당신보다 당신을 더 낫게 만든다."</FontStyles.Italic>
      <Quotes>
        <p>
          <span>1만 시간의 법칙</span>은<br />어떤 분야의 전문가가 되기 위해서는<br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
      </Quotes>
  </StyledIntro>
};

export default Intro;
