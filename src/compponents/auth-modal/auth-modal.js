import './auth-modal.css';

import AuthModalContent from "../auth-modal__content/auth-modal__content";

function AuthModal() {
    return (
        <div className="auth-modal modal fade" id="auth-modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Вход</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <AuthModalContent/>
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
