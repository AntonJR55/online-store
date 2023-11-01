import { useState } from "react";
import { Link } from "react-router-dom";

import arrow from "../../icons/arrow.png";
import CatalogFilters from "./CatalogFilters";
import CatalogList from "./CatalogList";

const CatalogPage = ({
    onAddToCard,
    showNotification,
    cardInNotification,
    onCloseNotification,
    onShowDetailedCard
}) => {
    const [popularityValue, setPopularityValue] = useState(null);
    const [typeValue, setTypeValue] = useState(null);
    const [priceFrom, setPriceFrom] = useState();
    const [priceTo, setPriceTo] = useState();

    const popularityFilter = (checkedItem) => {
        setPopularityValue(checkedItem);
    };

    const typeFilter = (checkedItem) => {
        setTypeValue(checkedItem);
    };

    const priceFromFilter = (from) => {
        setPriceFrom(from);
    };

    const priceToFilter = (to) => {
        setPriceTo(to);
    };

    return (
        <div className="catalogPage">
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
            <div className="catalogPage_panel">
                <CatalogFilters
                    onPopularity={popularityFilter}
                    onType={typeFilter}
                    onPriceFrom={priceFromFilter}
                    onPriceTo={priceToFilter}
                />
                <CatalogList
                    popularityValue={popularityValue}
                    typeValue={typeValue}
                    priceFrom={priceFrom}
                    priceTo={priceTo}
                    onAddToCard={onAddToCard}
                    showNotification={showNotification}
                    cardInNotification={cardInNotification}
                    onCloseNotification={onCloseNotification}
                    onShowDetailedCard={onShowDetailedCard}
                />
            </div>
        </div>
    );
};

export default CatalogPage;
