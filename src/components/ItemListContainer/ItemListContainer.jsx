import style from "./ItemListContainer.module.css"
import {getProducts, getProductsByCategory} from "../../asyncMock";
import {useEffect, useState} from "react";
import {ItemList} from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

export function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    }, [categoryId]);


    return (
        <>
            <div className={style['container__item']}>
                <h1 className={style.title}>{greeting}</h1>
                <div className={style.itemList}>
                    <ItemList products={products} />
                </div>
            </div>

        </>
    )
}