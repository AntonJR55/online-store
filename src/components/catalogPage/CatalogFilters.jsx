import React, { useState, useEffect } from "react";
import filter from "../../icons/filter.png";
import chevronDown from "../../icons/chevron-down.png";
import chevronUp from "../../icons/chevron-up.png";
import itemInfo from "../../data/data";

const CatalogFilters = ({ onPopularity, onType, onPriceFrom, onPriceTo }) => {
    const [showType, setShowType] = useState(false);
    const [showPopularity, setShowPopularity] = useState(false);
    const [typeValue, setTypeValue] = useState(null);
    const [popularityValue, setPopularityValue] = useState(null);
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(
        Math.max(...itemInfo.map((item) => item.initialPrice))
    );

    const handleCheck = (stateSetter, stateValue, newValue) => {
        if (stateValue === newValue) {
            stateSetter(null);
        } else {
            stateSetter(newValue);
        }
    };

    const changePrice = (setter, e) => {
        setter(e.target.value);
    };

    const resetFilters = () => {
        setTypeValue(null);
        setPopularityValue(null);
        setPriceFrom(0);
        setPriceTo(Math.max(...itemInfo.map((item) => item.initialPrice)));
    }

    useEffect(() => {
        onPopularity(popularityValue);
    }, [popularityValue]);

    useEffect(() => {
        onType(typeValue);
    }, [typeValue]);

    useEffect(() => {
        onPriceFrom(priceFrom);
    }, [priceFrom]);

    useEffect(() => {
        onPriceTo(priceTo);
    }, [priceTo]);

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
                            <input
                                type="text"
                                value={priceFrom}
                                onChange={(e) => changePrice(setPriceFrom, e)}
                            />
                        </div>
                        <div className="params_price__to">
                            <input
                                type="text"
                                value={priceTo}
                                onChange={(e) => changePrice(setPriceTo, e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="params_type">
                    <div className="params_type__header">
                        <div className="params_type__title">
                            <span>Тип продукта</span>
                        </div>
                        <div
                            className="params_type__icon"
                            onClick={() => setShowType(!showType)}
                        >
                            <img
                                src={showType ? chevronUp : chevronDown}
                                alt="Chevron"
                            />
                        </div>
                    </div>
                    {showType && (
                        <div className="params_type__body">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <div className="params_type__value" key={value}>
                                    <div className="params_type__checkbox">
                                        <input
                                            type="checkbox"
                                            id={`type-checkbox-${value}`}
                                            checked={typeValue === value}
                                            onChange={() =>
                                                handleCheck(
                                                    setTypeValue,
                                                    typeValue,
                                                    value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="params_type__text">
                                        <label
                                            htmlFor={`type-checkbox-${value}`}
                                        >
                                            {value}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="params_type">
                    <div className="params_type__header">
                        <div className="params_type__title">
                            <span>По популярности</span>
                        </div>
                        <div
                            className="params_type__icon"
                            onClick={() => setShowPopularity(!showPopularity)}
                        >
                            <img
                                src={showPopularity ? chevronUp : chevronDown}
                                alt="Chevron"
                            />
                        </div>
                    </div>
                    {showPopularity && (
                        <div className="params_type__body">
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="asc"
                                        checked={popularityValue === "asc"}
                                        onChange={() =>
                                            handleCheck(
                                                setPopularityValue,
                                                popularityValue,
                                                "asc"
                                            )
                                        }
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="asc">По возрастанию</label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="desc"
                                        checked={popularityValue === "desc"}
                                        onChange={() =>
                                            handleCheck(
                                                setPopularityValue,
                                                popularityValue,
                                                "desc"
                                            )
                                        }
                                    />
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
                <button type="button" onClick={resetFilters}>
                    <span>Сбросить фильтры</span>
                </button>
            </div>
        </div>
    );
};

export default CatalogFilters;
