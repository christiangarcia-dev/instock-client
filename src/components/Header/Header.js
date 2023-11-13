import "./Header.scss"
import logo from "../../assets/logo/InStock-Logo.svg"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} className="header__logo-src" alt="instock logo" />
            </div>
            <div className="header__buttons">
                <Link to={`/`} className="header__buttons-link">
                <button className="header__buttons-warehouses header__buttons-all">Warehouses</button>
                </Link>
                <Link to={`/inventory`} className="header__buttons-link">
                <button className="header__buttons-inventory header__buttons-all">Inventory</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;