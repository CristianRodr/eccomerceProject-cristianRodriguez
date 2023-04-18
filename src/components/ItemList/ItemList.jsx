import style from "./ItemList.module.css";
import {Item} from "../Item/Item";

export const ItemList = ({products}) => {

    return (
        <>
            <div className={style.card}>
                {products.map(produces =>
                <Item key={produces.id} {...produces}></Item>)}
            </div>
        </>
    )
}