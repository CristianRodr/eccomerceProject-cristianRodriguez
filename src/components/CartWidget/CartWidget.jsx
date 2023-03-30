import cart from "./assets/shopping-trolley.svg";
import "./CartWidget.css";

export function CartWidget() {
    return (
        <>
            <div>
                <img className="Cart__Widget" src={cart} alt="shopping-trolley"/>
            </div>
        </>
    )
}