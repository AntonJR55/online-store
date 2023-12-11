import { useContext } from "react";

import AppContext from "../context/AppContext";

const DetailedButton = ({ item }) => {
    const ctx = useContext(AppContext);

    return (
        <button onClick={() => ctx.onShowDetailedCard(item)}>
            <span>Подробнее</span>
        </button>
    );
};

export default DetailedButton;
