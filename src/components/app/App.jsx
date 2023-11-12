import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

import Header from "../header/Header";
import Subheader from "../subheader/Subheader";
import Footer from "../footer/Footer";
import BasketPage from "../basketPage/BasketPage";
import CatalogPage from "../catalogPage/CatalogPage";
import ItemPage from "../itemPage/ItemPage";

import "../../scss/index.scss";
import MainPage from "../mainPage/MainPage";

function App() {
    const [cardInNotification, setCardInNotification] = React.useState();
    const [cardItem, setCardItem] = React.useState([]);
    const [addedItems, setAddedItems] = React.useState([]);
    const [showNotification, setShowNotification] = React.useState(false);
    const [showToast, setShowToast] = React.useState(false);
    const [detailedCardItem, setDetailedCardItem] = React.useState([]);

    const cardItemLength = cardItem.length;

    const showDetailedCardItem = (itemInfo) => {
        setDetailedCardItem([itemInfo]);
    };

    const closeNotification = () => {
        setShowNotification(false);
    };

    const closeToast = () => {
        setShowToast(false);
    }

    const handleAddToCard = (itemInfo) => {
        if (!addedItems.includes(itemInfo.id)) {
            setCardInNotification(itemInfo);
            setCardItem([...cardItem, itemInfo]);
            setAddedItems([...addedItems, itemInfo.id]);
            setShowNotification(true);
        } else {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000); 
        }
    };

    const deleteItem = (itemId) => {
        setCardItem((prevData) =>
            prevData.filter((item) => item.id !== itemId)
        );
        setAddedItems((prevData) => prevData.filter((item) => item !== itemId));
    };

    const deleteItemsAll = () => {
        setCardItem([]);
        setAddedItems([]);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Subheader
                                    cardItemLength={cardItemLength}
                                    onShowDetailedCard={showDetailedCardItem}
                                />
                                <MainPage
                                    showNotification={showNotification}
                                    showToast={showToast}
                                    cardInNotification={cardInNotification}
                                    onAddToCard={handleAddToCard}
                                    onShowDetailedCard={showDetailedCardItem}
                                    onCloseNotification={closeNotification}
                                    onCloseToast={closeToast}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/basket"
                        element={
                            <>
                                <Header />
                                <Subheader
                                    cardItemLength={cardItemLength}
                                    onShowDetailedCard={showDetailedCardItem}
                                />
                                <BasketPage
                                    cardItem={cardItem}
                                    onDeleteItemsAll={deleteItemsAll}
                                    onDeleteItem={deleteItem}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/catalog"
                        element={
                            <>
                                <Header />
                                <Subheader
                                    cardItemLength={cardItemLength}
                                    onShowDetailedCard={showDetailedCardItem}
                                />
                                <CatalogPage
                                    onAddToCard={handleAddToCard}
                                    showNotification={showNotification}
                                    showToast={showToast}
                                    cardInNotification={cardInNotification}
                                    onShowDetailedCard={showDetailedCardItem}
                                    onCloseNotification={closeNotification}
                                    onCloseToast={closeToast}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/item/:id"
                        element={
                            <>
                                <Header />
                                <Subheader
                                    cardItemLength={cardItemLength}
                                    onShowDetailedCard={showDetailedCardItem}
                                />
                                <ItemPage detailedCardItem={detailedCardItem} />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
