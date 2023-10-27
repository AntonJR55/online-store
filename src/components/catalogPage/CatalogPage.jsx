import { useState } from "react";
import { Link } from "react-router-dom";

import arrow from "../../icons/arrow.png";
import CatalogFilters from "./CatalogFilters";
import CatalogList from "./CatalogList";

const CatalogPage = () => {

    const [popularityValue, setPopularityValue] = useState(null);
    const [typeValue, setTypeValue] = useState(null);

    const popularityFilter = (checkedItem) => {
        setPopularityValue(checkedItem);
    }

    const typeFilter = (checkedItem) => {
        setTypeValue(checkedItem);
        console.log(checkedItem)
    }

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
                <CatalogFilters onPopularity={popularityFilter} onType={typeFilter} />
                <CatalogList popularityValue={popularityValue} typeValue={typeValue} />
            </div>
        </div>
    );
};

export default CatalogPage;
