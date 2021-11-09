import React from "react";
import OrderTable from './components/orderTable/orderTable.js';
import DenseAppBar from './components/appBar/appBar.js';

const App = () => {
    return (
        <div>
            <DenseAppBar color="primary" position="static" />
            <OrderTable />
        </div>
    );
}

export default App;