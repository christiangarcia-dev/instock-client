import "./Header.scss"
import logo from "../../assets/logo/InStock-Logo.svg"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <NavLink className="header__logo-link" to={`/`}>
            <div className="header__logo">
                <img src={logo} className="header__logo-src" alt="instock logo" />
            </div>
            </NavLink>
            <div className="header__buttons">
                <NavLink className="header__buttons-warehouses header__buttons-all" to={`/`} >
                Warehouses
                </NavLink>
                <NavLink className="header__buttons-inventory header__buttons-all" to={`/inventory`} >
                Inventory
                </NavLink>
            </div>
        </header>
    )
}

export default Header;