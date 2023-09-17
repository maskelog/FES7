import React from 'react';
import { ModalOverlay, ModalContent, ButtonWithMargin } from './ModalStyle';
import LicatImage from '../../assets/licat.png';

function Modal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <h2>화이팅!!♥♥♥</h2>
                <p>당신의 꿈을 응원합니다.</p>
                <img src={LicatImage} alt="Licat" />
                <button onClick={onClose}>종료하고 진짜 훈련하러 가기 GO! GO!</button>
            </ModalContent>
        </ModalOverlay>
    );
}

export default Modal;
