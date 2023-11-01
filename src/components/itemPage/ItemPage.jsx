import { Link } from "react-router-dom";

import arrow from "../../icons/arrow.png";
import plus from "../../icons/plus.png";
import minus from "../../icons/minus.png";
import whiteBasket from "../../icons/whiteBasket.png";

const ItemPage = ({ detailedCardItem }) => {
    return (
        <div className="itemPage">
            <div className="navigation">
                <div className="navigation__main">
                    <Link to={`/`}>Главная</Link>
                </div>
                <div className="navigation__arrow">
                    <img src={arrow} alt="Arrow" />
                </div>
                <div className="navigation__item">
                    <span>Товар</span>
                </div>
            </div>
            {detailedCardItem.map((item) => (
                <div className="itemPage__item">
                    <div className="item__header">
                        <div className="item__img">
                            <img src={item.image} alt="Item" />
                        </div>
                        <div className="item__panels">
                            <div className="item__title">
                                <span>{item.title}</span>
                            </div>
                            <div className="item__standard">
                                <span>{item.standard}</span>
                            </div>
                            <div className="item__price">
                                <span>{item.initialPrice}</span>
                            </div>
                            <div className="item__count">
                                <div className="item__count_increase">
                                    <img src={minus} alt="Minus" />
                                </div>
                                <div className="item__count_total">
                                    <span>1</span>
                                </div>
                                <div className="item__count_decrease">
                                    <img src={plus} alt="Plus" />
                                </div>
                            </div>
                            <div className="item__addToBasket">
                                <button>
                                    <div className="item__addToBasket_img">
                                        <img src={whiteBasket} alt="Basket" />
                                    </div>
                                    <div className="item__addToBasket_text">
                                        <span>В корзину</span>
                                    </div>
                                </button>
                            </div>
                            <div className="item__description">
                                <div className="item__description_title">
                                    <span>Описание</span>
                                </div>
                                <div className="item__description_text">
                                    <span>
                                        Корпусные хомутовые опоры трубопроводов
                                        для крепления труб
                                        <br /> диаметром от 57 до 630 мм.
                                        Состоят из корпуса с приваренными
                                        <br /> ребрами жесткости и двух либо
                                        четырех полухомутов.
                                        <br />
                                        Изготавливаются согласно ОСТ 36-146-88
                                        тип КХ из углеродистой
                                        <br /> стали ВСт3пс, ст. 20, 09Г2С, и
                                        нержавеющей 12Х18Н10Т.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item__parameters">
                        <div className="parameters__title">
                            <span>Информация</span>
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
                </div>
            ))}
        </div>
    );
};

export default ItemPage;