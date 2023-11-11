import { useState, useEffect, Fragment } from "react";

import arrowLeft from "../../icons/arrow-left.png";
import arrowRight from "../../icons/arrow-right.png";

const PageSelection = ({
    totalPages,
    onQuantityHandler,
    onPageHandler,
    onPrev,
    onNext,
}) => {
    const [active, setActive] = useState("first-item");

    useEffect(() => {
        onQuantityHandler(active);
        console.log('quantityHandler');
    }, [active]);


    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(
            <div
                key={i}
                className="transition_pageNumbers-number"
                onClick={() => onPageHandler(i + 1)}
            >
                <span>{i + 1}</span>
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
                        <div className="transition_next" onClick={onPrev}>
                            <img src={arrowLeft} alt="Arrow-left" />
                        </div>
                        <div className="transition_pageNumbers">
                            {pageNumbers}
                        </div>
                        <div className="transition_prev" onClick={onNext}>
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
