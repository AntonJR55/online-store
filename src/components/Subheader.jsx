import { Link } from 'react-router-dom';

import logo from '../img/logo.png';
import search from '../img/search.png';
import square from '../img/catalog.png';
import star from '../img/star.png';
import basket from '../img/basket.png';

const Subheader = () => {
    return (
        <div className="container">
            <div className="subheader">
                <div className="subheader__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="subheader__title">
                    <p>Республиканский производитель металлоизделий</p>
                </div>
                <div className="subheader__catalog">
                    <div className="subheader__catalog_square">
                        <img src={square} alt="square" />
                    </div>
                    <button>Каталог</button>
                </div>
                <div className="subheader__input">
                    <div className="subheader__input_logo">
                        <img src={search} alt="search" />
                    </div>
                    <input type="text" className="subheader__input_search" placeholder="Поиск по названию..."/>                   
                </div>
                <div className="subheader__button">
                    <button>Заказать звонок</button>
                </div>
                <div className="subheader__favourites">
                    <div className="subheader__favourites_star">
                        <img src={star} alt="star" />
                    </div>
                    <div className="subheader__favourites_title">
                        <p>Избранное</p>
                    </div>
                </div>

                <Link className="subheader__basket" to={`/basket`}>                    
                    <div className="subheader__basket_bsk">
                        <img src={basket} alt="basket" />
                    </div>
                    <div className="subheader__basket_circle">
                        <p>1</p>
                    </div>
                    <div className="subheader__basket_title">
                        <p>Корзина</p>
                    </div>            
                </Link>
            </div>
        </div>
    )
}

export default Subheader;