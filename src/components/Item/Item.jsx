import style from "./Item.module.css";
import {Link} from "react-router-dom";

export const Item = ({id, name, img, price, stock}) => {
    return (
        <>
            <div className={style.cards}>
                <picture>
                    <img src={img} alt={name} className={style.img}/>
                </picture>
                <div>
                    <h2 className={style.title}>{name}</h2>
                </div>
                <section>
                    <p className={style.price}>Precio: <span className={style.spaPrice}>${price}</span></p>
                    <p className={style.stock}>Stock Disponible: <span className={style.spaStock}>{stock}</span></p>
                </section>
                <footer className={style.footer}>
                    <Link className={style.detalle} to={`/item/${id}`}>Ver detalle</Link>
                </footer>
            </div>
        </>
    )
}