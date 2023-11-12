import { Link } from 'react-router-dom';

import SearchPanel from '../UI/SearchPanel';

import logo from '../../icons/logo.png';
import square from '../../icons/catalog.png';
import star from '../../icons/star.png';
import basket from '../../icons/basket.png';

const Subheader = ({ cardItemLength, onShowDetailedCard }) => {
    return (
        <div className="container">
            <div className="subheader">
                <div className="subheader__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="subheader__title">
                    <p>Республиканский производитель металлоизделий</p>
                </div>
                <Link className="subheader__catalog" to={`/catalog`}>
                    <div className="subheader__catalog_square">
                        <img src={square} alt="square" />
                    </div>
                    <button>Каталог</button>
                </Link>
                <SearchPanel onShowDetailedCard={onShowDetailedCard} />
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
                        <p>{cardItemLength}</p>
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