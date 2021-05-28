import React from "react";
import './auth-modal__content.css';
import ModalInputs from "../auth-modal__content__inputs/auth-modal__content__inputs";

function AuthModal__Content() {
    return (
        <div className="auth-modal__content modal-body">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">Войти
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Зарегистрироваться
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ModalInputs name = 'Войти'/>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <ModalInputs name = "Зарегистрироваться"/>
                </div>
            </div>
        </div>
    );
}

export default AuthModal__Content;