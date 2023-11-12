import { Fragment  } from "react";

import Description from "./Description";
import AreasOfActivity from "./AreasOfActivity";
import PopularProducts from "./PopularProducts";

const MainPage = ({ showNotification, showToast, cardInNotification, onAddToCard, onCloseNotification, onShowDetailedCard, onCloseToast }) => {
    return (
        <Fragment>
            <Description />
            <AreasOfActivity />
            <PopularProducts 
                showNotification={showNotification}
                showToast={showToast}
                cardInNotification={cardInNotification}
                onAddToCard={onAddToCard}
                onShowDetailedCard={onShowDetailedCard}
                onCloseNotification={onCloseNotification}
                onCloseToast={onCloseToast}
            />
        </Fragment>
    )
}

export default MainPage;