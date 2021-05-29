import { NavLink } from 'react-router-dom';


const FilterBar = () =>{
    return(
        <nav className="navigation container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact={ true }>Популярные</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/new">Новые</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/fast">До 30 минут</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/medium" tabIndex="-1" aria-disabled="true">До часа</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/long" tabIndex="-1" aria-disabled="true">От часа</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default FilterBar