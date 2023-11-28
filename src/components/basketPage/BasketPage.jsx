import React from "react";
import { Link } from "react-router-dom";

import AppContext from "../context/AppContext";

import arrow from "../../icons/arrow.png";
import plus from "../../icons/plus.png";
import minus from "../../icons/minus.png";
import remove from "../../icons/remove.png";
import ContactsForm from "./ContactsForm";

const BasketPage = () => {
    const ctx = React.useContext(AppContext);

    const [data, setData] = React.useState(ctx.cardItem);
    const [totalPrice, setTotalPrice] = React.useState(0);

    React.useEffect (() => {
        const totalPrice = Number(data.reduce((total, item) => total + item.totalPrice, 0).toFixed(2));
        setTotalPrice(totalPrice);
    }, [data]);

    const changeQuantity = (itemId, newQuantity) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === itemId ? 
                    {
                        ...item,
                        quantity: newQuantity,
                        totalPrice: Number((item.initialPrice * newQuantity).toFixed(2))
                    }
                    : item
            )
        );
    };

    const deleteItem = (itemId) => {
        setData((prevData) =>
            prevData.filter(item => item.id !== itemId) 
        );
        ctx.onDeleteItem(itemId);
    }

    const deleteItemsAll = () => {
        setData([]);
        ctx.onDeleteItemsAll();
    }

    return (
        <div className="basketPage">
            <div className="navigation">
                <div className="navigation__main">
                    <Link to={`/`}>Главная</Link>
                </div>
                <div className="navigation__arrow">
                    <img src={arrow} alt="Arrow" />
                </div>
                <div className="navigation__order">
                    <span>Оформление заказа</span>
                </div>
            </div>
            <div className="order">
                <div className="title">
                    <h1>Корзина</h1>
                </div>
                <div className="board">
                    <div className="list">
                        {data.map((item) => (
                            <div className="list__item" key={item.id}>
                                <div className="list__item_img">
                                    <img src={item.image} alt="Item" />
                                </div>
                                <div className="list__item_info">
                                    <div className="list__item_info-standard">
                                        <span>{item.standard}</span>
                                    </div>
                                    <div className="list__item_info-name">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="list__item_info-price">
                                        <span>{item.initialPrice}</span>
                                    </div>
                                </div>
                                <div className="list__item_count">
                                    <div
                                        className="list__item_count-increase"
                                        onClick={() =>
                                            changeQuantity(
                                                item.id,
                                                Math.max(1, item.quantity - 1)
                                            )
                                        }
                                    >
                                        <img src={minus} alt="Minus" />
                                    </div>
                                    <div className="list__item_count-total">
                                        <span>{item.quantity}</span>
                                    </div>
                                    <div
                                        className="list__item_count-decrease"
                                        onClick={() =>
                                            changeQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                    >
                                        <img src={plus} alt="Plus" />
                                    </div>
                                </div>
                                <div className="list__item_amount">
                                    {item.totalPrice}
                                </div>
                                <div className="list__item_delete" onClick={() => deleteItem(item.id)}>
                                    <img src={remove} alt="Delete" />
                                </div>
                            </div>
                        ))}
                        <div className="list__clean">
                            <div className="list__clean_img">
                                <img src={remove} alt="Basket" />
                            </div>
                            <div className="list__clean_text" onClick={deleteItemsAll}>
                                <span>Очистить корзину</span>
                            </div>
                        </div>
                    </div>
                    <ContactsForm totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    );
};

export default BasketPage;