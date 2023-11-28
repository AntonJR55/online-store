import { useState } from "react";
import { Link } from "react-router-dom";

import data from "../../data/data";

import arrow from "../../icons/arrow.png";
import CatalogFilters from "./CatalogFilters";
import CatalogList from "./CatalogList";
import PageSelection from "./PageSelection";

const CatalogPage = () => {
    const [displayedItems, setDisplayedItems] = useState(data);
    const [popularityValue, setPopularityValue] = useState(null);
    const [typeValue, setTypeValue] = useState(null);
    const [priceFrom, setPriceFrom] = useState();
    const [priceTo, setPriceTo] = useState();

    const displayGoods = (goods) => {
        setDisplayedItems(goods);
    };

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
                <div className="catalogPage_filters">
                    <CatalogFilters
                        onPopularity={popularityFilter}
                        onType={typeFilter}
                        onPriceFrom={priceFromFilter}
                        onPriceTo={priceToFilter}
                    />
                </div>
                <div className="catalogPage_items">
                    <CatalogList displayedItems={displayedItems} />
                    <PageSelection
                        onDisplayGoods={displayGoods}
                        popularityValue={popularityValue}
                        typeValue={typeValue}
                        priceFrom={priceFrom}
                        priceTo={priceTo}
                    />
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
