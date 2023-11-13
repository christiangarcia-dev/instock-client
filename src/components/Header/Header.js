import "./Header.scss"
import logo from "../../assets/logo/InStock-Logo.svg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} className="header__logo-src" alt="instock logo" />
                </Link>
            </div>
            <div className="header__buttons">
                <button className="header__buttons-warehouses header__buttons-all">Warehouses</button>
                <button className="header__buttons-inventory header__buttons-all">Inventory</button>
            </div>
        </header>
    )
}

export default Header;