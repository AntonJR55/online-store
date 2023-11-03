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
    const [detailedCardItem, setDetailedCardItem] = React.useState([]);
    console.log(detailedCardItem);
    
    const showDetailedCardItem = (itemInfo) => {
        setDetailedCardItem([itemInfo]);
        console.log('yes');
    }

    const closeNotification = () => {
        setShowNotification(false);
    };

    const handleAddToCard = (itemInfo) => {
        if (!addedItems.includes(itemInfo.id)) {
            setCardInNotification(itemInfo);
            setCardItem([...cardItem, itemInfo]);
            setAddedItems([...addedItems, itemInfo.id]);
            setShowNotification(true);
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
                                <Subheader onShowDetailedCard={showDetailedCardItem} />
                                <MainPage
                                    showNotification={showNotification}
                                    cardInNotification={cardInNotification}
                                    onAddToCard={handleAddToCard}
                                    onShowDetailedCard={showDetailedCardItem}
                                    onCloseNotification={closeNotification}
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
                                <Subheader onShowDetailedCard={showDetailedCardItem} />
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
                                <Subheader onShowDetailedCard={showDetailedCardItem} />
                                <CatalogPage
                                    onAddToCard={handleAddToCard}
                                    showNotification={showNotification}
                                    cardInNotification={cardInNotification}
                                    onShowDetailedCard={showDetailedCardItem}
                                    onCloseNotification={closeNotification}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/item/:id"
                        element={
                            <>
                                <Header />
                                <Subheader onShowDetailedCard={showDetailedCardItem} />
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
