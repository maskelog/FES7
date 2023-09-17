import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #5B2386;
    position: relative;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputContainer = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Gmarket Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
`;

export const OutputContainer = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Gmarket Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
`;

export const InspirationalText = styled.p`
    color: yellow;
    font-family: 'OTEnjoystoriesBA';
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 125px;
`;

export const TitleImage = styled.img`
    display: block;
    width: 564px;
    height: 112px;
`;

export const ClockImage = styled.img`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    max-width: 100%;
    width: 221.604px;
    height: 225px;
`;

export const RuleDescription = styled.div`
    font-family: Gmarket Sans;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0;

    & > span {
        display: block;
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;

        &.highlighted {
            font-weight: 700;
            font-size: 24px;
        }
    }
`;

export const Output = styled.div`

color: #FFF;
font-family: Gmarket Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Button = styled.button`
    font-size: 24px;
    background: #FCEE21;
    color: #5B2386;
    padding: 10px 20px;
    border: none;
    border-radius: 56px;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
  
  &:hover {
    background-color: #40196D; /* hover 시 배경색 변경 */
  }
`;