import style from "./ItemCount.module.css"
import {useState} from "react";

export function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function cartHandler() {
        onAdd(quantity)
    }

    return (
        <>
            <div>
                <div className={style.counter}>
                    <button className={style.button} onClick={decrement}>-</button>
                    <h4>{quantity}</h4>
                    <button className={style.button} onClick={increment}>+</button>
                </div>
                <div className={style.counter}>
                    <button className={style.button__carrito} onClick={cartHandler} disabled={!stock}>+ Agregar</button>
                </div>
            </div>
        </>
    )
}