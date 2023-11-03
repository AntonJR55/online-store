import { Fragment  } from "react";

import Description from "./Description";
import AreasOfActivity from "./AreasOfActivity";
import PopularProducts from "./PopularProducts";

const MainPage = ({ showNotification, cardInNotification, onAddToCard, onCloseNotification, onShowDetailedCard }) => {
    return (
        <Fragment>
            <Description />
            <AreasOfActivity />
            <PopularProducts 
                showNotification={showNotification}
                cardInNotification={cardInNotification}
                onAddToCard={onAddToCard}
                onShowDetailedCard={onShowDetailedCard}
                onCloseNotification={onCloseNotification}
            />
        </Fragment>
    )
}

export default MainPage;