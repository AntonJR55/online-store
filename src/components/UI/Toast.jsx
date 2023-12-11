import { useContext } from "react";

import AppContext from "../context/AppContext";

import close from "../../icons/close.png";

const Toast = () => {
    const ctx = useContext(AppContext);

    return (
        <div className="toast">
            <div className="toast__text">
                <span>Данный товар уже находится в корзине!</span>
            </div>
            <div className="toast__img" onClick={ctx.onCloseToast}>
                <img src={close} alt="Close" />
            </div>
        </div>
    );
};

export default Toast;
