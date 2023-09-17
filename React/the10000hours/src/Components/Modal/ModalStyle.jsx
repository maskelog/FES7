import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 50;
    left: 50;
    width: 800px;
    height: 800px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 947px;
    height: 951px;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'OTEnjoystoriesBA';
    color: #5B2386;

    h2 {
        font-size: 96px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    p {
        font-size: 36px;
        margin-bottom: 20px;
    }

    button {
        font-size: 24px;
        background: #FCEE21;
        color: #5B2386;
        padding: 10px 20px;
        border: none;
        border-radius: 56px;
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
    }
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

export const LicatImage = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
`;

export const ButtonWithMargin = styled.button`
    margin-top: 74px;
`;