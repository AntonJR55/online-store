import React from "react";
import { Link } from "react-router-dom";

import AddButton from "../UI/AddButton";

import AppContext from "../context/AppContext";

import data from "../../data/data";

import close from "../../icons/close.png";
import DetailedButton from "../UI/DetailedButton";
import Notification from "../UI/Notification";
import Toast from "../UI/Toast";

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
                                <AddButton item={item} />
                            </div>
                            <Link
                                className="popularProducts__cards_item-detailed"
                                to={`/item/${item.id}`}
                            >
                                <DetailedButton item={item} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {ctx.showNotification ? (
                <Notification />
            ) : (
                ""
            )}
            {ctx.showToast && (
                <Toast />
            )}
        </div>
    );
};

export default PopularProducts;
