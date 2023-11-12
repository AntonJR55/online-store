import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageSelection from "./PageSelection";

import data from "../../data/data";

import plus from "../../icons/plus.png";
import minus from "../../icons/minus.png";
import whiteBasket from "../../icons/whiteBasket.png";

const CatalogList = ({
    popularityValue,
    typeValue,
    priceFrom,
    priceTo,
    onAddToCard,
    showNotification,
    cardInNotification,
    onCloseNotification,
    onShowDetailedCard,
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const [quantityOfItems, setQuantityOfItems] = useState(5);
    const [goods, setGoods] = useState(data);
    console.log(goods);

    useEffect(() => {
        const priceFilteredData = data.filter((item) => {
            const itemPrice = item.initialPrice;
            return (
                itemPrice >= parseFloat(priceFrom) &&
                itemPrice <= parseFloat(priceTo)
            );
        });

        const typeAndPriceFilteredData = priceFilteredData.filter((item) => {
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

        const popularitySortedData = typeAndPriceFilteredData.slice(0); 

        switch (popularityValue) {
            case "asc":
                popularitySortedData.sort((a, b) => a.popularity - b.popularity);
                break;
            case "desc":
                popularitySortedData.sort((a, b) => b.popularity - a.popularity);
                break;
            default:
                break;
        }

        setGoods(popularitySortedData);
    }, [popularityValue, priceFrom, priceTo, typeValue]);

    const endIndex = startIndex + quantityOfItems;
    const totalPages = Math.ceil(goods.length / quantityOfItems);

    const quantityOfItemsHandler = (activeItem) => {
        switch (activeItem) {
            case "first-item":
                setQuantityOfItems(5);
                setStartIndex(0);
                break;
            case "second-item":
                setQuantityOfItems(10);
                setStartIndex(0);
                break;
            default:
                setQuantityOfItems(15);
                setStartIndex(0);
                break;
        }
    };

    const prevPage = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - quantityOfItems);
        }
    };

    const nextPage = () => {
        if (endIndex < data.length) {
            setStartIndex(startIndex + quantityOfItems);
        }
    };

    const handlePageChange = (pageNumber) => {
        // Calculate the new start index based on the clicked page number
        const newStartIndex = (pageNumber - 1) * quantityOfItems;
        setStartIndex(newStartIndex);
      };

    const displayedItems = goods.slice(startIndex, endIndex);

    return (
        <div className="catalogList">
            {displayedItems.map((item) => (
                <div key={item.id} className="list_item">
                    <div className="item_img">
                        <img src={item.image} alt="Item" />
                    </div>
                    <div className="item_parameters">
                        <div className="parameters_caption">
                            <div className="caption_standard">
                                <span>{item.standard}</span>
                            </div>
                            <div className="caption_name">
                                <span>{item.title}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_type">
                            <div className="parameters_text">
                                <span>Тип</span>
                            </div>
                            <div className="type_line"></div>
                            <div className="parameters_value">
                                <span>{item.type}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_verticalLoad">
                            <div className="parameters_text">
                                <span>Вертикальная нагрузка, кН</span>
                            </div>
                            <div className="verticalLoad_line"></div>
                            <div className="parameters_value">
                                <span>{item.verticalLoad}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_diameter">
                            <div className="parameters_text">
                                <span>Диаметр Дн, мм</span>
                            </div>
                            <div className="diameter_line"></div>
                            <div className="parameters_value">
                                <span>{item.diameter}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_supportWidth">
                            <div className="parameters_text">
                                <span>Ширина опоры, мм</span>
                            </div>
                            <div className="supportWidth_line"></div>
                            <div className="parameters_value">
                                <span>{item.supportWidth}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_blocksMass">
                            <div className="parameters_text">
                                <span>Масса блоков, кг</span>
                            </div>
                            <div className="blocksMass_line"></div>
                            <div className="parameters_value">
                                <span>{item.blocksMass}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_partNumber">
                            <div className="parameters_text">
                                <span>Артикул</span>
                            </div>
                            <div className="partNumber_line"></div>
                            <div className="parameters_value">
                                <span>{item.partNumber}</span>
                            </div>
                        </div>
                        <div className="parameter parameters_measurementUnit">
                            <div className="parameters_text">
                                <span>Единица измерения</span>
                            </div>
                            <div className="measurementUnit_line"></div>
                            <div className="parameters_value">
                                <span>{item.measurementUnit}</span>
                            </div>
                        </div>
                    </div>
                    <div className="item_addToBasket">
                        <div className="addToBasket_cost">
                            <span>{item.initialPrice}</span>
                        </div>
                        <div className="addToBasket_count">
                            <div className="addToBasket_count__increase">
                                <img src={minus} alt="Minus" />
                            </div>
                            <div className="addToBasket_count__total">
                                <span>{item.quantity}</span>
                            </div>
                            <div className="addToBasket_count__decrease">
                                <img src={plus} alt="Plus" />
                            </div>
                        </div>
                        <div className="addToBasket_basket">
                            <button onClick={() => onAddToCard(item)}>
                                <div className="addToBasket_basket__img">
                                    <img src={whiteBasket} alt="Basket" />
                                </div>
                                <div className="addToBasket_basket__text">
                                    <span>В корзину</span>
                                </div>
                            </button>
                        </div>
                        <Link
                            className="addToBasket_detailed"
                            to={`/item/${item.id}`}
                        >
                            <button onClick={() => onShowDetailedCard(item)}>
                                <span>Подробнее</span>
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
            {showNotification ? (
                <div className="notification">
                    <div className="notification__content">
                        <div className="notification__header">
                            <h3>Товар добавлен в корзину</h3>
                        </div>
                        <div className="notification__line">
                            <div></div>
                        </div>
                        <div className="notification__body">
                            <div className="notification__body_img">
                                <img
                                    src={cardInNotification.image}
                                    alt="Item"
                                />
                            </div>
                            <div className="notification__body_standard">
                                <span>{cardInNotification.standard}</span>
                            </div>
                            <div className="notification__body_title">
                                <span>{cardInNotification.title}</span>
                            </div>
                            <div className="notification__body_cost">
                                <span>{cardInNotification.initialPrice}</span>
                            </div>
                            <div className="notification__body_continue">
                                <button onClick={onCloseNotification}>
                                    <span>Продолжить покупки</span>
                                </button>
                            </div>
                            <Link
                                className="notification__body_basket"
                                to={`/basket`}
                            >
                                <button onClick={onCloseNotification}>
                                    <span>Перейти в корзину</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
            <PageSelection
                totalPages={totalPages}
                onQuantityHandler={quantityOfItemsHandler}
                onNext={nextPage}
                onPrev={prevPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default CatalogList;
