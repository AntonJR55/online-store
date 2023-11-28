import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Subheader from "../subheader/Subheader";
import Footer from "../footer/Footer";
import MainPage from "../mainPage/MainPage";
import BasketPage from "../basketPage/BasketPage";
import CatalogPage from "../catalogPage/CatalogPage";
import ItemPage from "../itemPage/ItemPage";

import "../../scss/index.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Subheader />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/basket" element={<BasketPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/item/:id" element={<ItemPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
