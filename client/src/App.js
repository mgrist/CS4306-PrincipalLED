import React from "react";
import OrderTable from './components/workOrders/orderTable.js';
import DenseAppBar from './components/workOrders/appBar.js';

const App = () => {
    return (
        <div>
            <DenseAppBar color="primary" position="static" />
            <OrderTable />
        </div>
    );
}

export default App;