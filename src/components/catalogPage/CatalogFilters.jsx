import filter from "../../icons/filter.png";

const CatalogFilters = () => {
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
                    <div className="params_type__text">
                        <span>Тип продукта</span>
                    </div>
                    <div className="params_type__select">
                        <select>
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <div className="params_popularity">
                    <div className="params_popularity__text">
                        <span>По популярности</span>
                    </div>
                    <div className="params_popularity__select">
                        <select>
                            <option value=""></option>
                            <option value="Up">По возрастанию</option>
                            <option value="Down">По убыванию</option>
                        </select>
                    </div>
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
