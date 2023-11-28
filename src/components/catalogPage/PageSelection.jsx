import { useState, useEffect, Fragment } from "react";

import data from "../../data/data";

import arrowLeft from "../../icons/arrow-left.png";
import arrowRight from "../../icons/arrow-right.png";

const PageSelection = ({
    popularityValue,
    typeValue,
    priceFrom,
    priceTo,
    onDisplayGoods,
}) => {
    const [goods, setGoods] = useState(data);
    const [active, setActive] = useState("first-item");
    const [startIndex, setStartIndex] = useState(0);
    const [quantityOfItems, setQuantityOfItems] = useState(5);
    const [activePageNumber, setActivePageNumber] = useState(1);

    useEffect(() => {
        const priceFilteredData = data.filter((item) => {
            const itemPrice = item.initialPrice;
            return (
                itemPrice >= parseFloat(priceFrom) &&
                itemPrice <= parseFloat(priceTo)
            );
        });

        const typeFilteredData = priceFilteredData.filter((item) => {
            switch (typeValue) {
                case 1:
                    return item.type === 1;
                case 2:
                    return item.type === 2;
                case 3:
                    return item.type === 3;
                case 4:
                    return item.type === 4;
                case 5:
                    return item.type === 5;
                default:
                    return true;
            }
        });

        const popularitySortedData = typeFilteredData.slice(0);

        switch (popularityValue) {
            case "ascPrice":
                popularitySortedData.sort(
                    (a, b) => a.initialPrice - b.initialPrice
                );
                break;
            case "descPrice":
                popularitySortedData.sort(
                    (a, b) => b.initialPrice - a.initialPrice
                );
                break;
            case "ascPopularity":
                popularitySortedData.sort(
                    (a, b) => a.popularity - b.popularity
                );
                break;
            case "descPopularity":
                popularitySortedData.sort(
                    (a, b) => b.popularity - a.popularity
                );
                break;
            default:
                break;
        }

        setGoods(popularitySortedData);
        setActivePageNumber(1);
    }, [priceFrom, priceTo, typeValue, popularityValue]);

    useEffect(() => {
        switch (active) {
            case "first-item":
                setQuantityOfItems(5);
                setStartIndex(0);
                break;
            case "second-item":
                setQuantityOfItems(10);
                setStartIndex(0);
                break;
            case "third-item":
                setQuantityOfItems(15);
                setStartIndex(0);
                break;
            default:
                setQuantityOfItems(data.length);
                setStartIndex(0);
                break;
        }
    }, [active]);

    useEffect(() => {
        setStartIndex((activePageNumber - 1) * quantityOfItems);
    }, [activePageNumber]);

    const endIndex = startIndex + quantityOfItems;
    const totalPages = Math.ceil(goods.length / quantityOfItems);

    const prevPage = () => {
        if (activePageNumber > 1) {
            setActivePageNumber(activePageNumber - 1);
        }
    };

    const nextPage = () => {
        if (activePageNumber < totalPages) {
            setActivePageNumber(activePageNumber + 1);
        }
    };

    useEffect(() => {
        onDisplayGoods(goods.slice(startIndex, endIndex));
    }, [goods, startIndex, endIndex]);

    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(
            <div
                key={i}
                className="transition_pageNumbers-number"
                onClick={() => setActivePageNumber(i + 1)}
            >
                <span
                    style={{
                        color: activePageNumber === i + 1 && "#000",
                    }}
                >
                    {i + 1}
                </span>
            </div>
        );
    }

    return (
        <div className="pageSelection">
            <div className="pageSelection_filter">
                <div className="pageSelection_filter__text">
                    <span>Выводить по</span>
                </div>
                <div className="pageSelection_filter__value">
                    <div
                        className="pageSelection_filter__value-item"
                        onClick={() => setActive("first-item")}
                    >
                        <span
                            style={{
                                color: active === "first-item" && "#E30614",
                                fontWeight: active === "first-item" && "bold",
                            }}
                        >
                            5
                        </span>
                    </div>
                    <div
                        className="pageSelection_filter__value-item"
                        onClick={() => setActive("second-item")}
                    >
                        <span
                            style={{
                                color: active === "second-item" && "#E30614",
                                fontWeight: active === "second-item" && "bold",
                            }}
                        >
                            10
                        </span>
                    </div>
                    <div
                        className="pageSelection_filter__value-item"
                        onClick={() => setActive("third-item")}
                    >
                        <span
                            style={{
                                color: active === "third-item" && "#E30614",
                                fontWeight: active === "third-item" && "bold",
                            }}
                        >
                            15
                        </span>
                    </div>
                </div>
            </div>
            <div className="pageSelection_transition">
                {pageNumbers.length > 1 ? (
                    <Fragment>
                        <div className="transition_next" onClick={prevPage}>
                            <img src={arrowLeft} alt="Arrow-left" />
                        </div>
                        <div className="transition_pageNumbers">
                            {pageNumbers}
                        </div>
                        <div className="transition_prev" onClick={nextPage}>
                            <img src={arrowRight} alt="Arrow-right" />
                        </div>
                    </Fragment>
                ) : (
                    ""
                )}
                <div
                    className="transition_showAll"
                    onClick={() => setActive("all-goods")}
                >
                    <span
                        style={{
                            fontWeight: active === "all-goods" && "bold",
                        }}
                    >
                        Показать все товары
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PageSelection;

