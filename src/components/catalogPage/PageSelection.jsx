import { useState } from "react";

import arrowLeft from "../../icons/arrow-left.png";
import arrowRight from "../../icons/arrow-right.png";

const PageSelection = ({ totalPages, onNext, onPrev }) => {
    const [active, setActive] = useState("first-item");

    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(
            <div key={i} className="transition_pageNumbers-number">
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
                            }}
                        >
                            15
                        </span>
                    </div>
                </div>
            </div>
            <div className="pageSelection_transition">
                <div className="transition_next" onClick={onPrev}>
                    <img src={arrowLeft} alt="Arrow-left" />
                </div>
                <div className="transition_pageNumbers">
                    {pageNumbers}
                </div>
                <div className="transition_prev" onClick={onNext}>
                    <img src={arrowRight} alt="Arrow-right" />
                </div>
                <div className="transition_showAll">
                    <span>Показать все товары</span>
                </div>
            </div>
        </div>
    );
};

export default PageSelection;
