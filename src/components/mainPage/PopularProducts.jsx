import React from "react";
import { Link } from "react-router-dom";

import AppContext from "../context/AppContext";

import data from "../../data/data";

import whiteBasket from "../../icons/whiteBasket.png";
import close from "../../icons/close.png";

const PopularProducts = () => {

    const ctx = React.useContext(AppContext);
    
    return (
        <div className="container">
            <div className="popularProducts">
                <div className="popularProducts__header">
                    <div className="popularProducts__header_title">
                        <h2>Популярные товары</h2>
                    </div>
                    <div className="popularProducts__header_catalog">
                        <button>
                            <span>Перейти в каталог</span>
                        </button>
                    </div>
                </div>
                <div className="popularProducts__cards">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="popularProducts__cards_item"
                        >
                            <div className="popularProducts__cards_item-img">
                                <img src={item.image} alt="Item" />
                            </div>
                            <div className="popularProducts__cards_item-standard">
                                <span>{item.standard}</span>
                            </div>
                            <div className="popularProducts__cards_item-title">
                                <span>{item.title}</span>
                            </div>
                            <div className="popularProducts__cards_item-cost">
                                <span>{item.initialPrice}</span>
                            </div>
                            <div className="popularProducts__cards_item-basket">
                                <button onClick={() => ctx.onAddToCard(item)}>
                                    <img src={whiteBasket} alt="Basket" />
                                    <span>В корзину</span>
                                </button>
                            </div>
                            <Link
                                className="popularProducts__cards_item-detailed"
                                to={`/item/${item.id}`}
                            >
                                <button
                                    onClick={() => ctx.onShowDetailedCard(item)}
                                >
                                    <span>Подробнее</span>
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {ctx.showNotification ? (
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
                                    src={ctx.cardInNotification.image}
                                    alt="Item"
                                />
                            </div>
                            <div className="notification__body_standard">
                                <span>{ctx.cardInNotification.standard}</span>
                            </div>
                            <div className="notification__body_title">
                                <span>{ctx.cardInNotification.title}</span>
                            </div>
                            <div className="notification__body_cost">
                                <span>{ctx.cardInNotification.initialPrice}</span>
                            </div>
                            <div className="notification__body_continue">
                                <button onClick={ctx.onCloseNotification}>
                                    <span>Продолжить покупки</span>
                                </button>
                            </div>
                            <Link
                                className="notification__body_basket"
                                to={`/basket`}
                            >
                                <button onClick={ctx.onCloseNotification}>
                                    <span>Перейти в корзину</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
            {ctx.showToast && (
                <div className="toast">
                    <div className="toast__text">
                        <span>Данный товар уже находится в корзине!</span>
                    </div>
                    <div className="toast__img" onClick={ctx.onCloseToast}>
                        <img src={close} alt="Close" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopularProducts;
