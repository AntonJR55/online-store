import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app/App";

import {AppContextProvider} from "./components/context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppContextProvider>
        	<App />
        </AppContextProvider>
    </React.StrictMode>
);
