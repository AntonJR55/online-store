import React, { useState, useEffect } from "react";

import filter from "../../icons/filter.png";
import chevronDown from "../../icons/chevron-down.png";
import chevronUp from "../../icons/chevron-up.png";
import itemInfo from "../../data/data";

const CatalogFilters = ({ onPopularity, onType, onPriceFrom, onPriceTo }) => {
    const [showType, setShowType] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const [typeValue, setTypeValue] = useState(null);
    const [checkedValue, setCheckedValue] = useState(null);
    const [sortingValue, setSortingValue] = useState(null);
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
        setSortingValue(null);
        setPriceFrom(0);
        setPriceTo(Math.max(...itemInfo.map((item) => item.initialPrice)));
    };

    useEffect(() => {
        onPopularity(sortingValue);
    }, [sortingValue]);

    useEffect(() => {
        onType(typeValue);
    }, [typeValue]);

    useEffect(() => {
        onPriceFrom(priceFrom);
    }, [priceFrom]);

    useEffect(() => {
        onPriceTo(priceTo);
    }, [priceTo]);

    const types = [1, 2, 3, 4, 5];

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
                            {types.map((value) => (
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
                            <span>Сортировать</span>
                        </div>
                        <div
                            className="params_type__icon"
                            onClick={() => setShowSort(!showSort)}
                        >
                            <img
                                src={showSort ? chevronUp : chevronDown}
                                alt="Chevron"
                            />
                        </div>
                    </div>
                    {showSort && (
                        <div className="params_type__body">
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="price"
                                        checked={checkedValue === "price"}
                                        onChange={() =>
                                            handleCheck(
                                                setCheckedValue,
                                                checkedValue,
                                                "price"
                                            )
                                        }
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="price">По цене</label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="ascPrice"
                                        checked={sortingValue === "ascPrice" && checkedValue === "price"}
                                        onChange={() =>
                                            handleCheck(
                                                setSortingValue,
                                                sortingValue,
                                                "ascPrice"
                                            )
                                        }
                                        disabled={checkedValue === "popularity" || checkedValue === null}
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="ascPrice">
                                        По возрастанию
                                    </label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="descPrice"
                                        checked={sortingValue === "descPrice" && checkedValue === "price"}
                                        onChange={() =>
                                            handleCheck(
                                                setSortingValue,
                                                sortingValue,
                                                "descPrice"
                                            )
                                        }
                                        disabled={checkedValue === "popularity" || checkedValue === null}
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="descPrice">
                                        По убыванию
                                    </label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="popularity"
                                        checked={checkedValue === "popularity"}
                                        onChange={() =>
                                            handleCheck(
                                                setCheckedValue,
                                                checkedValue,
                                                "popularity"
                                            )
                                        }
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="popularity">
                                        По популярности
                                    </label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="ascPopularity"
                                        checked={
                                            sortingValue === "ascPopularity" && checkedValue === "popularity"
                                        }
                                        onChange={() =>
                                            handleCheck(
                                                setSortingValue,
                                                sortingValue,
                                                "ascPopularity"
                                            )
                                        }
                                        disabled={checkedValue === "price" || checkedValue === null}
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="ascPopularity">
                                        По возрастанию
                                    </label>
                                </div>
                            </div>
                            <div className="params_type__value">
                                <div className="params_type__checkbox">
                                    <input
                                        type="checkbox"
                                        id="descPopularity"
                                        checked={
                                            sortingValue === "descPopularity" && checkedValue === "popularity"
                                        }
                                        onChange={() =>
                                            handleCheck(
                                                setSortingValue,
                                                sortingValue,
                                                "descPopularity"
                                            )
                                        }
                                        disabled={checkedValue === "price" || checkedValue === null}
                                    />
                                </div>
                                <div className="params_type__text">
                                    <label htmlFor="descPopularity">
                                        По убыванию
                                    </label>
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
