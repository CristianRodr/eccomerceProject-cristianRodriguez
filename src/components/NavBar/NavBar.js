import {CartWidget} from "../CartWidget/CartWidget";
import {Logo} from "../Logo/Logo";
import "./NavBar.css"
import {Link, NavLink} from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="nav">
                <div className="nav__menu">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/'}>
                        <Logo />
                    </Link>
                        <div className="navLink">
                            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/category/Kov`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Kov</NavLink>
                            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/category/Bex`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bex</NavLink>
                            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/category/Cafe Racer`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cafe Racer</NavLink>
                        </div>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </>
    );
}

export default NavBar;