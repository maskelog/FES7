import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('./fonts/GmarketSansTTFMedium.ttf') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'OTEnjoystoriesBA';
    src: url('./fonts/tvN 즐거운이야기 Medium.ttf') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  *{
    color: white;
    text-align: center;
    font-family: 'GmarketSansMedium';
    font-size: 18px;
  }
  body{
    background-color: #5B2386;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    line-height: 1.4;
  }
  
  h1 {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

const Colors = {
  White: `#FFF`,

  Yellow: `#F5DF4D`,

  Violet: `#5B2386`,
};

const Margin = `40px`;

const Fonts = {
  FontStyle: css`
    font-family: "GmarketSansMedium";
    font-size: 24px;
  `,
  FontEnjoy: css`
    font-family: "OTEnjoystoriesBA";
  `,
};

const FontStyles = {
  Italic: styled.p`
    ${Fonts.FontEnjoy};
    font-size: 36px;
    color: ${Colors.Yellow};
    margin-bottom: ${Margin};
    @media (max-width: 900px) {
      font-size: 22px;
    }
  `,

  Strong: styled.strong`
    font-weight: 700;
    ${Fonts.FontStyle};
  `,

  Mega: styled.strong`
    font-size: 48px;
    font-weight: 700;
    ${Fonts.FontStyle};
  `,

  Br: styled.span`
    @media (max-width: 900px) {
      display: block;
    }
  `,
};

export default GlobalStyle;
export { Fonts, FontStyles, Colors, Margin };
