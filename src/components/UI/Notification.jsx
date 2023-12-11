import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from "../context/AppContext";

const Notification = () => {

    const ctx = useContext(AppContext);

    return (
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
                        <img src={ctx.cardInNotification.image} alt="Item" />
                    </div>
                    <div className="notification__body_standard">
                        <span>{ctx.cardInNotification.standard}</span>
                    </div>
                    <div className="notification__body_title">
                        <span>{ctx.cardInNotification.title}</span>
                    </div>
                    <div className="notification__body_cost">
                        <span>{ctx.cardInNotification.initialPrice}</span>
                    </div>
                    <div className="notification__body_continue">
                        <button onClick={ctx.onCloseNotification}>
                            <span>Продолжить покупки</span>
                        </button>
                    </div>
                    <Link className="notification__body_basket" to={`/basket`}>
                        <button onClick={ctx.onCloseNotification}>
                            <span>Перейти в корзину</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Notification;
