import styled from "styled-components";
import { Margin } from "./style";

export const HiddenH1 = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const H1 = styled.div`
  margin: ${Margin} 0;
  position: relative;
`;

export const Img = styled.img`
  display: block;
  max-width: calc(100%/2);
  margin: auto;
  object-fit: contain;
  object-position: center;
`;

export const Logo = styled(Img)`
  position: absolute;
  inset: 0;
  max-width: calc(100% / 4);
  z-index: -1
`;