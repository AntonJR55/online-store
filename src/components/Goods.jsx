import React from "react";
import { Link } from "react-router-dom";

import data from "../data";

import whiteBasket from "../img/whiteBasket.png";

const Goods = ({
    showNotification,
    cardInNotification,
    onAddToCard,
    onCloseNotification,
}) => {

    return (
        <div className="container">
            <div className="goods">
                <div className="goods__header">
                    <div className="goods__header_title">
                        <h2>Популярные товары</h2>
                    </div>
                    <div className="goods__header_catalog">
                        <button>
                            <span>Перейти в каталог</span>
                        </button>
                    </div>
                </div>
                <div className="goods__cards">
                    {data.map((item) => (
                        <div key={item.id} className="goods__cards_item">
                            <div className="goods__cards_item-img">
                                <img src={item.image} alt="Item" />
                            </div>
                            <div className="goods__cards_item-standard">
                                <span>{item.standard}</span>
                            </div>
                            <div className="goods__cards_item-title">
                                <span>{item.title}</span>
                            </div>
                            <div className="goods__cards_item-cost">
                                <span>{item.initialPrice}</span>
                            </div>
                            <div className="goods__cards_item-basket">
                                <button onClick={() => onAddToCard(item)}>
                                    <img src={whiteBasket} alt="Basket" />
                                    <span>В корзину</span>
                                </button>
                            </div>
                            <div className="goods__cards_item-detailed">
                                <button>
                                    <span>Подробнее</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showNotification ? (
                <div className="notification">
                    <div className="notification__content">
                        <div className="notification__header">
                            <h3>Товар добавлен в корзину</h3>
                        </div>
                        <div className="notification__line">
                            <div></div>
                        </div>
                        <div className="notification__body">
                            <div className="notification__body_img">
                                <img
                                    src={cardInNotification.image}
                                    alt="Item"
                                />
                            </div>
                            <div className="notification__body_standard">
                                <span>{cardInNotification.standard}</span>
                            </div>
                            <div className="notification__body_title">
                                <span>{cardInNotification.title}</span>
                            </div>
                            <div className="notification__body_cost">
                                <span>{cardInNotification.initialPrice}</span>
                            </div>
                            <div className="notification__body_continue">
                                <button onClick={onCloseNotification}>
                                    <span>Продолжить покупки</span>
                                </button>
                            </div>
                            <Link
                                className="notification__body_basket"
                                to={`/basket`}
                            >
                                <button onClick={onCloseNotification}>
                                    <span>Перейти в корзину</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Goods;
