import React from "react";
import { Link } from "react-router-dom";

import firstItem from "../img/firstItem.jpg";
import secondItem from "../img/secondItem.jpg";
import thirdItem from "../img/thirdItem.jpg";
import fourthItem from "../img/fourthItem.jpg";
import fifthItem from "../img/fifthItem.jpg";
import sixthItem from "../img/sixthItem.jpg";
import seventhItem from "../img/seventhItem.jpg";
import eighthItem from "../img/eighthItem.jpg";
import whiteBasket from "../img/whiteBasket.png";

const Goods = ({
    showNotification,
    cardInNotification,
    onAddToCard,
    onCloseNotification,
}) => {

    const itemInfo = [
        {
            id: 1,
            image: firstItem,
            standard: "ГОСТ 14911-82",
            title: "Опора тавровая хомутовая ТХ",
            initialPrice: 349.9,
            totalPrice: 349.9,
            quantity: 1,
        },
        {
            id: 2,
            image: secondItem,
            standard: "ГОСТ 14911-83",
            title: "Опора тавровая хомутовая ТХ",
            initialPrice: 349.9,
            totalPrice: 349.9,
            quantity: 1,
        },
        {
            id: 3,
            image: thirdItem,
            standard: "ГОСТ 14911-84",
            title: "Опора тавровая хомутовая ТХ",
            initialPrice: 349.9,
            totalPrice: 349.9,
            quantity: 1,
        },
        {
            id: 4,
            image: fourthItem,
            standard: "ГОСТ 14911-85",
            title: "Опора тавровая хомутовая ТХ",
            initialPrice: 349.9,
            totalPrice: 349.9,
            quantity: 1,
        },
        {
            id: 5,
            image: fifthItem,
            standard: "ГОСТ 14911-82",
            title: "Опора тавровая хомутовая ТХ",
            initialPrice: 349.9,
            totalPrice: 349.9,
            quantity: 1,
        },
        {
            id: 6,
            image: sixthItem,
            standard: "ГОСТ 14911-82",
            title: "Опора тавровая хомутовая ТХ",
            initialPrice: 349.9,
            totalPrice: 349.9,
            quantity: 1,
        },
        {
            id: 7,
            image: seventhItem,
            standard: "ГОСТ 14911-82",
            title: "Опора тавровая хомутовая ТХ",
            initialPrice: 349.9,
            totalPrice: 349.9,
            quantity: 1,
        },
        {
            id: 8,
            image: eighthItem,
            standard: "ГОСТ 14911-82",
            title: "Опора тавровая хомутовая ТХ",
            initialPrice: 349.9,
            totalPrice: 349.9,
            quantity: 1,
        },
    ];

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
                    {itemInfo.map((item) => (
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
