import { Fragment  } from "react";

import Header from "../header/Header";
import Subheader from "../subheader/Subheader";
import Description from "./Description";
import AreasOfActivity from "./AreasOfActivity";
import PopularProducts from "./PopularProducts";
import Footer from "../footer/Footer";


const MainPage = ({ showNotification, cardInNotification, onAddToCard, onCloseNotification }) => {
    return (
        <Fragment>
            <Header />
            <Subheader />
            <Description />
            <AreasOfActivity />
            <PopularProducts 
                showNotification={showNotification}
                cardInNotification={cardInNotification}
                onAddToCard={onAddToCard}
                onCloseNotification={onCloseNotification}
            />
            <Footer />
        </Fragment>
    )
}

export default MainPage;