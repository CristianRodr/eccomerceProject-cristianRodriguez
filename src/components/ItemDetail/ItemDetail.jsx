import {ItemCount} from "../ItemCount/ItemCount";
import style from "./ItemDetail.module.css"

export const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    function countHandler(quantity) {
        console.log("Cantidad Agregada ", quantity)
    }

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
                    <p className={style.letter}>Categoria: <span className={style.paragraph}>{category}</span> </p>
                    <p className={style.letter}>Descripción: <span className={style.paragraph}>{description}</span>}</p>
                    <p className={style.letter}>Precio: <span className={style.paragraph}>${price}</span></p>
                    <p className={style.letter}>Stock Disponible: <span className={style.paragraph}>{stock}</span></p>
                </section>
                <footer className={style.footer}>
                    <ItemCount className={style.detalle} initial={1} stock={stock} onAdd={countHandler} />
                </footer>
            </div>
        </>
    )
}