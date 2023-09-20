import tel from '../img/tel.png';
import location from '../img/location.png';
import letter from '../img/letter.png';

const Header = () => {
    return (
        
        <div className="header">
            <div className="header__links">
                <a href="#" className="header__links_item">О нас</a>
                <a href="#" className="header__links_item">Производство</a>
                <a href="#" className="header__links_item">Выгоды для вас</a>
                <a href="#" className="header__links_item">Гарантии</a>
                <a href="#" className="header__links_item">Контакты</a>
            </div>
            <div className="header__contacts">
                <div className="header__contacts_tel">
                    <img src={tel} alt="tel" />
                </div>
                <div className="header__contacts_number">
                    <p>+375 (29) 458-78-56</p>
                </div>
                <div className="header__contacts_location">
                    <img src={location} alt="location" />
                </div>
                <div className="header__contacts_city">
                    <p>Минск</p>
                </div>
                <div className="header__contacts_letter">
                    <img src={letter} alt="letter" />
                </div>
                <div className="header__contacts_mail">
                    <p>info@bastion.pro</p>
                </div>
            </div>
        </div>
    )
}

export default Header;