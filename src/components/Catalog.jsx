import React from "react";
import { Link } from "react-router-dom";

import arrow from "../img/arrow.png";
import filter from "../img/filter.png";

const Catalog = () => {
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
                <div className="list_img">
                    <img src="#" alt="#" />
                </div>
                <div className="list_parameters">
                    <div className="parameters_caption">
                        <div className="parameters_caption__standard">
                            <span>ГОСТ 14911-82</span>
                        </div>
                        <div className="parameters_caption__title">
                            <h2>Опора</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
