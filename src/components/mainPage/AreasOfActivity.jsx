import first from '../../img/first.jpg';
import second from '../../img/second.jpg';
import third from '../../img/third.jpg';

const AreasOfActivity = () => {
    return (
        <div className="container">
            <div className="areasOfActivity">
                <div className="areasOfActivity__title">
                    <h2>Направления деятельности</h2>
                </div>
                <div className="areasOfActivity__cards">
                    <div className="areasOfActivity__cards_item">
                        <div className="areasOfActivity__cards_item-first">
                            <img src={first} alt="Metal products" />
                            <h3>Металлические изделия</h3>
                            <div className="first__string">
                                <p>Пример названия подпункта</p>
                            </div>
                            <div className="second__string">
                                <p>Пример</p>
                            </div>
                            <div className="third__string">
                                <p>Пример названия</p>
                            </div>
                            <div className="fourth__string">
                                <p>Подкатегория пример</p>
                            </div>
                            <div className="fifth__string">
                                <div className="fifth__string_circle"></div>
                                <div className="fifth__string_text">
                                    <p>Подробнее</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="areasOfActivity__cards_item">
                        <div className="areasOfActivity__cards_item-second">
                            <img src={second} alt="Fire-fighting equipment" />
                            <h3>Противопожарное оборудование</h3>
                            <div className="first__string">
                                <p>Пример названия подпункта</p>
                            </div>
                            <div className="second__string">
                                <p>Пример</p>
                            </div>
                            <div className="third__string">
                                <p>Пример названия</p>
                            </div>
                            <div className="fourth__string">
                                <p>Подкатегория пример</p>
                            </div>
                            <div className="fifth__string">
                                <div className="fifth__string_circle"></div>
                                <div className="fifth__string_text">
                                    <p>Подробнее</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="areasOfActivity__cards_item">
                        <div className="areasOfActivity__cards_item-third">
                            <img src={third} alt="Design of metal structures" />
                            <h3>Проектирование металлоконструкций</h3>
                            <div className="first__string">
                                <p>Пример названия подпункта</p>
                            </div>
                            <div className="second__string">
                                <p>Пример</p>
                            </div>
                            <div className="third__string">
                                <p>Пример названия</p>
                            </div>
                            <div className="fourth__string">
                                <p>Подкатегория пример</p>
                            </div>
                            <div className="fifth__string">
                                <div className="fifth__string_circle"></div>
                                <div className="fifth__string_text">
                                    <p>Подробнее</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AreasOfActivity;