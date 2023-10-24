import { useState } from "react";

import filter from "../../icons/filter.png";
import chevronDown from "../../icons/chevron-down.png";
import chevronUp from "../../icons/chevron-up.png";

const CatalogFilters = () => {
    const [showType, setShowType] = useState(false);
    const [showPopularity, setShowPopularity] = useState(false);
    
    return (
        <div className="catalogFilters">
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
                    <div className="params_type__header">
                        <div className="params_type__title">
                            <span>Тип продукта</span>
                        </div>
                        {showType ? (
                            <div
                                className="params_type__icon"
                                onClick={() => setShowType(false)}
                            >
                                <img src={chevronUp} alt="Chevron" />
                            </div>
                        ) : (
                            <div
                                className="params_type__icon"
                                onClick={() => setShowType(true)}
                            >
                                <img src={chevronDown} alt="Chevron" />
                            </div>
                        )}
                    </div>
                    {showType && (
                        <div className="params_type__body">
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="first-checkbox"
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="first-checkbox">1</label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="second-checkbox"
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="second-checkbox">2</label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="third-checkbox"
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="third-checkbox">3</label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="fourth-checkbox"
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="fourth-checkbox">4</label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="fifth-checkbox"
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="fifth-checkbox">5</label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="params_type">
                    <div className="params_type__header">
                        <div className="params_type__title">
                            <span>По популярности</span>
                        </div>
                        {showPopularity ? (
                            <div
                                className="params_type__icon"
                                onClick={() => setShowPopularity(false)}
                            >
                                <img src={chevronUp} alt="Chevron" />
                            </div>
                        ) : (
                            <div
                                className="params_type__icon"
                                onClick={() => setShowPopularity(true)}
                            >
                                <img src={chevronDown} alt="Chevron" />
                            </div>
                        )}
                    </div>
                    {showPopularity && (
                        <div className="params_type__body">
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input type="checkbox" id="asc" />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="asc">По возрастанию</label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input type="checkbox" id="desc" />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="desc">По убыванию</label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="reset">
                <button type="button">
                    <span>Сбросить фильтры</span>
                </button>
            </div>
        </div>
    );
};

export default CatalogFilters;
