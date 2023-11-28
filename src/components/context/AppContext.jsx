import React from "react";

const AppContext = React.createContext({
    cardItem: [],
    addedItems: [],
    cardInNotification: "",
    showNotification: false,
    showToast: false,
    detailedCardItem: [],
    cardItemLength: "",
    onAddToCard: () => {},
    onShowDetailedCard: () => {},
    onCloseNotification: () => {},
    onCloseToast: () => {},
    onDeleteItem: () => {},
    onDeleteItemsAll: () => {}
});

export const AppContextProvider = (props) => {
    const [cardItem, setCardItem] = React.useState([]);
    const [addedItems, setAddedItems] = React.useState([]);
    const [cardInNotification, setCardInNotification] = React.useState();
    const [showNotification, setShowNotification] = React.useState(false);
    const [showToast, setShowToast] = React.useState(false);
    const [detailedCardItem, setDetailedCardItem] = React.useState([]);

    const cardItemLength = cardItem.length;

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

    const showDetailedCardItem = (itemInfo) => {
        setDetailedCardItem([itemInfo]);
    };

    const closeNotification = () => {
        setShowNotification(false);
    };

    const closeToast = () => {
        setShowToast(false);
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
        <AppContext.Provider value={{
            cardItem: cardItem,
            cardInNotification: cardInNotification,
            showNotification: showNotification,
            showToast: showToast,
            detailedCardItem: detailedCardItem,
            cardItemLength: cardItemLength,
            onAddToCard: handleAddToCard,
            onShowDetailedCard: showDetailedCardItem,
            onCloseNotification: closeNotification,
            onCloseToast: closeToast,
            onDeleteItem: deleteItem,
            onDeleteItemsAll: deleteItemsAll
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;




