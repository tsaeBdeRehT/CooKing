import './header.css';

import AuthModal from "../auth-modal/auth-modal";
import FilterBar from "../filter-bar/filter-bar";

function Header() {
    return (
        <header className="header">
            <div className="navbar navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">CooKing</span>
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#auth-modal">
                        Войти
                    </button>
                    <AuthModal/>
                </div>
            </div>
            <FilterBar/>
        </header>
    );
}

export default Header;
