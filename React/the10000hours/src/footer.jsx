import React from 'react';
import styled from 'styled-components';

const CopyRight = styled.p`
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 400;
`;

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const StyledImage = styled.img`
    margin-bottom: 10px;
    // 필요한 스타일 추가
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledImage src={`${process.env.PUBLIC_URL}/public_assets/logo.png`} alt='weniv' />
            <CopyRight>※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
                <br />
                수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
            </CopyRight>
        </StyledFooter>
    );
}

export default Footer;