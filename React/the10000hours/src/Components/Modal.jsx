import React from 'react';

function Modal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>화이팅!!</h2>
                <p>당신의 꿈을 응원합니다.</p>
                <button onClick={onClose}>종료하고 진짜 훈련하러 가기 GO! GO!</button>
            </div>
        </div>
    );
}

export default Modal;
