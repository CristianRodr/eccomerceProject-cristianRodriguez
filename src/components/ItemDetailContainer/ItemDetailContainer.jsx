import {useEffect, useState} from "react";
import {getProductById} from "../../asyncMock";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import style from "./ItemDetailContainer.module.css"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => setProduct(response))
            .catch(error => console.log(error))
    }, [itemId]);

    return (
        <>
            <div className={style.ItemDetail}>
                <ItemDetail {...product} />
            </div>
        </>
    )
}