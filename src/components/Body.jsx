import React from "react";

import { Link } from "react-router-dom";

import arrow from "../img/arrow.png";
import plus from "../img/plus.png";
import minus from "../img/minus.png";
import remove from "../img/remove.png";
import basket from "../img/bsk.png";

const Body = ({ cardItem, onDeleteItem, onDeleteItemsAll }) => {
    const [data, setData] = React.useState(cardItem);
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
        onDeleteItem(itemId);
    }

    const deleteItemsAll = () => {
        setData([]);
        onDeleteItemsAll();
    }

    return (
        <div className="body">
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
                    <div className="contacts">
                        <div className="contacts__title">
                            <span>Контактная информация</span>
                        </div>
                        <form action="submit">
                            <input
                                type="text"
                                className="name"
                                placeholder="ФИО"
                            />
                            <input
                                type="text"
                                className="telephone"
                                placeholder="Контактный телефон"
                            />
                            <input
                                type="text"
                                className="email"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                className="organization"
                                placeholder="Организация / ИНН"
                            />
                            <input
                                type="text"
                                className="address"
                                placeholder="Адрес доставки"
                            />
                            <input
                                type="text"
                                className="code"
                                placeholder="Введите промокод"
                            />
                            <button className="apply">
                                <span>Применить</span>
                            </button>
                        </form>
                        <div className="contacts__total">
                            <div className="contacts__total_text">
                                <span>Итого</span>
                            </div>
                            <div className="contacts__total_number">
                                <span>{totalPrice} бел.руб</span>
                            </div>
                        </div>
                        <button className="contacts__register">
                            <div className="contacts__register_img">
                                <img src={basket} alt="basket" />
                            </div>
                            <div className="contacts__register_text">
                                <span>Оформить заказ</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
