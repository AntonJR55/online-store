import React from "react";
import { Link } from "react-router-dom";

import AppContext from "../context/AppContext";

import AddButton from "../UI/AddButton";

import plus from "../../icons/plus.png";
import minus from "../../icons/minus.png";
import close from "../../icons/close.png";
import DetailedButton from "../UI/DetailedButton";
import Notification from "../UI/Notification";
import Toast from "../UI/Toast";

const CatalogList = ({ displayedItems }) => {
    const ctx = React.useContext(AppContext);

    return (
        <div className="catalogList">
            {displayedItems.map((item) => (
                <div key={item.id} className="list_item">
                    <div className="item_img">
                        <img src={item.image} alt="Item" />
                    </div>
                    <div className="item_parameters">
                        <div className="parameters_caption">
                            <div className="caption_standard">
                                <span>{item.standard}</span>
                            </div>
                            <div className="caption_name">
                                <span>{item.title}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_type">
                            <div className="parameters_text">
                                <span>Тип</span>
                            </div>
                            <div className="type_line"></div>
                            <div className="parameters_value">
                                <span>{item.type}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_verticalLoad">
                            <div className="parameters_text">
                                <span>Вертикальная нагрузка, кН</span>
                            </div>
                            <div className="verticalLoad_line"></div>
                            <div className="parameters_value">
                                <span>{item.verticalLoad}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_diameter">
                            <div className="parameters_text">
                                <span>Диаметр Дн, мм</span>
                            </div>
                            <div className="diameter_line"></div>
                            <div className="parameters_value">
                                <span>{item.diameter}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_supportWidth">
                            <div className="parameters_text">
                                <span>Ширина опоры, мм</span>
                            </div>
                            <div className="supportWidth_line"></div>
                            <div className="parameters_value">
                                <span>{item.supportWidth}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_blocksMass">
                            <div className="parameters_text">
                                <span>Масса блоков, кг</span>
                            </div>
                            <div className="blocksMass_line"></div>
                            <div className="parameters_value">
                                <span>{item.blocksMass}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_partNumber">
                            <div className="parameters_text">
                                <span>Артикул</span>
                            </div>
                            <div className="partNumber_line"></div>
                            <div className="parameters_value">
                                <span>{item.partNumber}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_measurementUnit">
                            <div className="parameters_text">
                                <span>Единица измерения</span>
                            </div>
                            <div className="measurementUnit_line"></div>
                            <div className="parameters_value">
                                <span>{item.measurementUnit}</span>
                            </div>
                        </div>
                    </div>
                    <div className="item_addToBasket">
                        <div className="addToBasket_cost">
                            <span>{item.initialPrice}</span>
                        </div>
                        <div className="addToBasket_count">
                            <div className="addToBasket_count__increase">
                                <img src={minus} alt="Minus" />
                            </div>
                            <div className="addToBasket_count__total">
                                <span>{item.quantity}</span>
                            </div>
                            <div className="addToBasket_count__decrease">
                                <img src={plus} alt="Plus" />
                            </div>
                        </div>
                        <div className="addToBasket_basket">
                            <AddButton item={item} />
                        </div>
                        <Link
                            className="addToBasket_detailed"
                            to={`/item/${item.id}`}
                        >
                            <DetailedButton item={item} />
                        </Link>
                    </div>
                </div>
            ))}
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

export default CatalogList;
