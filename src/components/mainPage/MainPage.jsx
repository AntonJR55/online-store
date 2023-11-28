import { Fragment } from "react";

import Description from "./Description";
import AreasOfActivity from "./AreasOfActivity";
import PopularProducts from "./PopularProducts";

const MainPage = () => {
    return (
        <Fragment>
            <Description />
            <AreasOfActivity />
            <PopularProducts />
        </Fragment>
    );
};

export default MainPage;
