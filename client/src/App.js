import React from "react";
import OrderTable from './components/orderTable/orderTable.js';
//import DenseAppBar from './components/appBar/appBar.js';
import AppBar from "./components/appBar/appBar.js";

const App = () => {
    return (
        <div>
            <AppBar />
            <OrderTable />
        </div>
    );
}

export default App;