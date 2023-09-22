import React, { useState } from "react";
import { Link } from "react-router-dom";

import data from "../data";

import arrow from "../img/arrow.png";
import filter from "../img/filter.png";
import plus from "../img/plus.png";
import minus from "../img/minus.png";
import whiteBasket from "../img/whiteBasket.png";

const Catalog = () => {
    const [startIndex, setStartIndex] = useState(0);
    const endIndex = startIndex + 5;

    const nextPage = () => {
        if (endIndex < data.length) {
            setStartIndex(startIndex + 5);
        }
    };

    const prevPage = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 5);
        }
    };

    const displayedItems = data.slice(startIndex, endIndex);

    return (
        <div className="catalog">
            <div className="navigation">
                <div className="navigation__main">
                    <Link to={`/`}>Главная</Link>
                </div>
                <div className="navigation__arrow">
                    <img src={arrow} alt="Arrow" />
                </div>
                <div className="navigation__catalog">
                    <span>Каталог</span>
                </div>
            </div>
            <div className="title">
                <h1>Каталог</h1>
            </div>
            <div className="catalog_panel">
                <div className="filters">
                    <div className="caption">
                        <div className="caption_logo">
                            <img src={filter} alt="Filter" />
                        </div>
                        <div className="caption_text">
                            <h3>Фильтры</h3>
                        </div>
                    </div>
                    <div className="params">
                        <div className="params_price">
                            <div className="params_price__text">
                                <span>Цена, бел. руб.</span>
                            </div>
                            <div className="params_price__input">
                                <div className="params_price__from">
                                    <input type="text" placeholder="От" />
                                </div>
                                <div className="params_price__to">
                                    <input type="text" placeholder="До" />
                                </div>
                            </div>
                        </div>
                        <div className="params_type">
                            <div className="params_type__text">
                                <span>Тип продукта</span>
                            </div>
                            <div className="params_type__select">
                                <select>
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="params_popularity">
                            <div className="params_popularity__text">
                                <span>По популярности</span>
                            </div>
                            <div className="params_popularity__select">
                                <select>
                                    <option value=""></option>
                                    <option value="Up">По возрастанию</option>
                                    <option value="Down">По убыванию</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="reset">
                        <button type="button">
                            <span>Сбросить фильтры</span>
                        </button>
                    </div>
                </div>
                <div className="list">
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
                                    <button>
                                        <div className="addToBasket_basket__img">
                                            <img
                                                src={whiteBasket}
                                                alt="Basket"
                                            />
                                        </div>
                                        <div className="addToBasket_basket__text">
                                            <span>В корзину</span>
                                        </div>
                                    </button>
                                </div>
                                <div className="addToBasket_detailed">
                                    <button>
                                        <span>Подробнее</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="pageSelection">
                        <div className="pageSelection_next">
                            <button onClick={nextPage}>
                                <span>Вперед</span>
                            </button>
                        </div>
                        <div className="pageSelection_prev">
                            <button onClick={prevPage}>
                                <span>Назад</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
