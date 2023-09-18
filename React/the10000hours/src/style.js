import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'OTEnjoystoriesBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
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

export const Colors = {
  White: `#FFF`,

  Yellow: `#F5DF4D`,

  Violet: `#5B2386`,
};

export const Margin = `40px`;

export const Fonts = {
  FontStyle: css`
    font-family: "GmarketSansMedium";
    font-size: 24px;
  `,
  FontEnjoy: css`
    font-family: "OTEnjoystoriesBA";
  `,
};

export const FontStyles = {
  Italic: styled.p`
    ${Fonts.FontEnjoy};
    font-size: 24px;
    color: ${Colors.Yellow};
    margin-bottom: ${Margin};
    text-align: center;
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
