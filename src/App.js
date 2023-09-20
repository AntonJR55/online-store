import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import React from 'react';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Background from './components/Background';
import Activity from './components/Activity';
import Goods from './components/Goods';
import Footer from './components/Footer';
import Body from './components/Body';
import Catalog from './components/Catalog';

import './scss/app.scss';

function App() {

    const [cardInNotification, setCardInNotification] = React.useState();
    const [cardItem, setCardItem] = React.useState([]);
    const [addedItems, setAddedItems] = React.useState([]);
    const [showNotification, setShowNotification] = React.useState(false);

    const closeNotification = () => {
        setShowNotification(false);
    }


    const handleAddToCard = (itemInfo) => {
        if (!addedItems.includes(itemInfo.id)) {
            setCardInNotification(itemInfo);
            setCardItem([...cardItem, itemInfo]);
            setAddedItems([...addedItems, itemInfo.id]);
            setShowNotification(true);
        }
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<>
                        <Header />
                        <Subheader />
                        <Background />
                        <Activity />
                        <Goods 
                            showNotification={showNotification}
                            cardInNotification={cardInNotification}                           
                            onAddToCard={handleAddToCard}
                            onCloseNotification={closeNotification} 
                        />
                        <Footer />
                    </>} />
                    <Route path="/basket" element={<>
                        <Header />
                        <Subheader />
                        <Body cardItem={cardItem} />
                        <Footer />
                    </>} />
                    <Route path="/catalog" element={<>
                        <Header />
                        <Subheader />
                        <Catalog />
                    </>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;