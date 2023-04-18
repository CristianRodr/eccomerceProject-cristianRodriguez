import cart from "./assets/cart.svg";
import style from "./CartWidget.module.css";



export function CartWidget() {
    return (
        <>
            <div className={style.control}>
                <img className={style["Cart__Widget"]} src={cart} alt="shopping-trolley"/>
                <p className={style.letter}>Tu carrito</p>
                <h4 className={style.count}>0</h4>
            </div>
        </>
    )
}