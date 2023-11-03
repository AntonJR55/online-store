import { useState } from "react";
import { Link } from "react-router-dom";

import data from "../../data/data";

import search from "../../icons/search.png";

const SearchPanel = ({ onShowDetailedCard }) => {
    const [term, setTerm] = useState("");

    const updateSearch = (e) => {
        const item = e.target.value;
        setTerm(item);
    };

    const searchItems = (data, term) => {
        if (!term) {
            return (data = []);
        } else {
            return data.filter((item) => {
                return (
                    item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
                );
            });
        }
    };

    const visibleData = searchItems(data, term);

    return (
        <div className="searchPanel">
            <div className="searchPanel__logo">
                <img src={search} alt="search" />
            </div>
            <input
                type="text"
                className="searchPanel__input"
                placeholder="Поиск по названию..."
                onChange={updateSearch}
            />
            {visibleData.map((item) => (
                <Link
                    key={item.id}
                    className="searchPanel__item"
                    to={`/item/${item.id}`}
                    onClick={() => onShowDetailedCard(item)}
                >
                    <div className="searchPanel__item_img">
                        <img src={item.image} alt="Item" />
                    </div>
                    <div className="searchPanel__item_info">
                        <div className="searchPanel__item_info-title">
                            <span>{item.title}</span>
                        </div>
                        <div className="searchPanel__item_info-price">
                            <span>{item.initialPrice}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SearchPanel;
