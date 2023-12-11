import { useContext } from "react";

import AppContext from "../context/AppContext";

import whiteBasket from "../../icons/whiteBasket.png";

const AddButton = ({ item }) => {
    const ctx = useContext(AppContext);

    return (
        <button onClick={() => ctx.onAddToCard(item)}>
            <img src={whiteBasket} alt="Basket" />
            <span>В корзину</span>
        </button>
    );
};

export default AddButton;
