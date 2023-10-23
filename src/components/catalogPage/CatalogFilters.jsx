import { useState } from "react";

import filter from "../../icons/filter.png";
import chevronDown from "../../icons/chevron-down.png";
import chevronUp from "../../icons/chevron-up.png";

const CatalogFilters = () => {
    const [showValues, setShowValues] = useState(false);
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
                        {showValues ? (
                            <div className="params_type__icon" onClick={() => setShowValues(false)}>
                                <img src={chevronUp} alt="Chevron" />
                            </div>
                        ) : (
                            <div className="params_type__icon" onClick={() => setShowValues(true)}>
                                <img src={chevronDown} alt="Chevron" />
                            </div>
                        )}
                    </div>
                    {showValues && (
                        <div className="params_type__body">
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input type="checkbox" id="first-checkbox" />
                                </div>
                                <div className="params_type__text">
                                    <span>1</span>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input type="checkbox" id="second-checkbox" />
                                </div>
                                <div className="params_type__text">
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input type="checkbox" id="third-checkbox" />
                                </div>
                                <div className="params_type__text">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    )}
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
    );
};

export default CatalogFilters;
