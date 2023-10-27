import { useState, useEffect } from "react";

import filter from "../../icons/filter.png";
import chevronDown from "../../icons/chevron-down.png";
import chevronUp from "../../icons/chevron-up.png";

const CatalogFilters = ({ onPopularity, onType }) => {
    const [showType, setShowType] = useState(false);
    const [showPopularity, setShowPopularity] = useState(false);
    const [typeValue, setTypeValue] = useState(null);
    const [isCheckedFirst, setIsCheckedFirst] = useState(false);
    const [isCheckedSecond, setIsCheckedSecond] = useState(false);
    const [isCheckedThird, setIsCheckedThird] = useState(false);
    const [isCheckedFourth, setIsCheckedFourth] = useState(false);
    const [isCheckedFifth, setIsCheckedFifth] = useState(false);
    const [popularityValue, setPopularityValue] = useState(null);
    const [isCheckedAsc, setIsCheckedAsc] = useState(false);
    const [isCheckedDesc, setIsCheckedDesc] = useState(false);

    console.log(typeValue)

    useEffect(() => {
        onPopularity(popularityValue);
    }, [popularityValue]);

    useEffect(() => {
        onType(typeValue);
    }, [typeValue])

    useEffect(() => {
        if (isCheckedAsc === true) {
            setPopularityValue("asc");
        } else if (isCheckedDesc === true) {
            setPopularityValue("desc");
        } else {
            setPopularityValue(null);
        }
    }, [isCheckedAsc, isCheckedDesc]);

    useEffect(() => {
        if (isCheckedFirst === true) {
            setTypeValue(1);
        } else if (isCheckedSecond === true) {
            setTypeValue(2);
        } else if (isCheckedThird === true) {
            setTypeValue(3);
        } else if (isCheckedFourth === true) {
            setTypeValue(4);
        } else if (isCheckedFifth === true) {
            setTypeValue(5);
        } else {
            setTypeValue(null);
        }
    }, [isCheckedFifth, isCheckedFirst, isCheckedFourth, isCheckedSecond, isCheckedThird])

    const handleCheckedAsc = () => {
        if (isCheckedDesc) {
            setIsCheckedDesc(false);
        }
        setIsCheckedAsc(!isCheckedAsc);
    };

    const handleCheckedDesc = () => {
        if (isCheckedAsc) {
            setIsCheckedAsc(false);
        }
        setIsCheckedDesc(!isCheckedDesc);
    };

    const handleCheckedFirst = () => {
        if (isCheckedSecond) {
            setIsCheckedSecond(false);
        }
        if (isCheckedThird) {
            setIsCheckedThird(false);
        }
        if (isCheckedFourth) {
            setIsCheckedFourth(false);
        }
        if (isCheckedFifth) {
            setIsCheckedFifth(false);
        }
        setIsCheckedFirst(!isCheckedFirst);
    }

    const handleCheckedSecond = () => {
        if (isCheckedFirst) {
            setIsCheckedFirst(false);
        }
        if (isCheckedThird) {
            setIsCheckedThird(false);
        }
        if (isCheckedFourth) {
            setIsCheckedFourth(false);
        }
        if (isCheckedFifth) {
            setIsCheckedFifth(false);
        }
        setIsCheckedSecond(!isCheckedSecond);
    }

    const handleCheckedThird = () => {
        if (isCheckedFirst) {
            setIsCheckedFirst(false);
        }
        if (isCheckedSecond) {
            setIsCheckedSecond(false);
        }
        if (isCheckedFourth) {
            setIsCheckedFourth(false);
        }
        if (isCheckedFifth) {
            setIsCheckedFifth(false);
        }
        setIsCheckedThird(!isCheckedThird);
    }

    const handleCheckedFourth = () => {
        if (isCheckedFirst) {
            setIsCheckedFirst(false);
        }
        if (isCheckedSecond) {
            setIsCheckedSecond(false);
        }
        if (isCheckedThird) {
            setIsCheckedThird(false);
        }
        if (isCheckedFifth) {
            setIsCheckedFifth(false);
        }
        setIsCheckedFourth(!isCheckedFourth);
    }

    const handleCheckedFifth = () => {
        if (isCheckedFirst) {
            setIsCheckedFirst(false);
        }
        if (isCheckedSecond) {
            setIsCheckedSecond(false);
        }
        if (isCheckedThird) {
            setIsCheckedThird(false);
        }
        if (isCheckedFourth) {
            setIsCheckedFourth(false);
        }
        setIsCheckedFifth(!isCheckedFifth);
    }

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
                                onChange={() => setShowType(false)}
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
                                        checked={isCheckedFirst}
                                        onChange={handleCheckedFirst}
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
                                        checked={isCheckedSecond}
                                        onChange={handleCheckedSecond}
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
                                        checked={isCheckedThird}
                                        onChange={handleCheckedThird}
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
                                        checked={isCheckedFourth}
                                        onChange={handleCheckedFourth}
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
                                        checked={isCheckedFifth}
                                        onChange={handleCheckedFifth}
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
                                    <input
                                        type="checkbox"
                                        id="asc"
                                        checked={isCheckedAsc}
                                        onChange={handleCheckedAsc}
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
                                        checked={isCheckedDesc}
                                        onChange={handleCheckedDesc}
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
                <button type="button">
                    <span>Сбросить фильтры</span>
                </button>
            </div>
        </div>
    );
};

export default CatalogFilters;
