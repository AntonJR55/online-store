import footer__logo from '../img/footer__logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={footer__logo} alt="logo" />
            </div>
            <div className="footer__title">
                <p>Республиканский <br/>производитель <br/>металлоизделий</p>
            </div>
            <div className="footer__list">
                <ul>
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">О компании</a>
                    </li>
                    <li>
                        <a href="#">Доставка и оплата</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                    <li>
                        <a href="#">Реквизиты</a>
                    </li>
                </ul>
            </div>
            <div className="footer__list">
                <ul>
                    <li>
                        <h2>Направление деятельности:</h2>
                    </li>
                    <li>BastionSteel</li>
                    <li>BastionFire</li>
                    <li>BastionProject</li>
                    <li>BastionServices</li>
                </ul>
            </div>
            <div className="footer__list">
                <ul>
                    <li>
                        <h2>+375 29 5885456</h2>
                    </li>
                    <li>info@bastion.pro</li>
                    <li>График работы:</li>
                    <li>ПН-ПТ 9:00-18:00</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;