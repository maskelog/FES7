import styled from "styled-components";

export const StyledIntro = styled.section`
max-width: 1200px;
padding: 5vh;
`;

export const Quotes = styled.div`
display: flex;
flex-basis: 373px;
min-width: 0;
flex-shrink: 0;
flex-grow: 0;
gap: 14px;
&::before {
  content: '“';
  font-size:50px;
  color: red;
  margin-left: auto;
}
&::after {
  content: '”';
  font-size:50px;
  color: red;
  margin-right: auto;
}
`;

export const Intro = styled.div`

`
