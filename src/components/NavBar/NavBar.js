import {CartWidget} from "../CartWidget/CartWidget";
import {Logo} from "../Logo/Logo";
import "./NavBar.css"

function NavBar() {
    return (
        <>
            <nav className="nav">
                <Logo/>
                <div className="nav__menu">
                    <div>
                        <ul>
                            <li className="nav__crumbs"><a href="#">Inicio</a></li>
                            <li className="nav__crumbs"><a href="#">Tienda</a></li>
                            <li className="nav__crumbs"><a href="#">Blog</a></li>
                            <li className="nav__crumbs"><a href="#">Contáctenos</a></li>
                        </ul>
                    </div>
                    <div>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;