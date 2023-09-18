import React from 'react';
import {H1, Logo, Img, HiddenH1} from './headerStyle';

const Header = () => {
  return <>
  <HiddenH1>1만 시간의 법칙</HiddenH1>
  <H1>
    <Img src={`${process.env.PUBLIC_URL}/public_assets/title.png`} alt='1만 시간의 법칙'/>
    <Logo src={`${process.env.PUBLIC_URL}/public_assets/clock.png`} alt='background'/>
  </H1>
  </>
}

export default Header;