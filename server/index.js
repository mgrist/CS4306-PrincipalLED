import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from "body-parser";

import orderRoutes from './routes/workOrders.route.js';
import productRoutes from './routes/products.route.js';
import stageRoutes from './routes/stages.route.js';
import operatorRoutes from './routes/operators.route.js';
import completionRoutes from './routes/completions.route.js';
import reasonRoutes from './routes/scrapsReasons.route.js';
import scrapRoutes from './routes/scraps.route.js';

const app = express();
app.use(bodyParser.json())
app.use(cors());

//localhost.com:5000/work-orders
app.use('/work-orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/stages', stageRoutes);
app.use('/operators', operatorRoutes);
app.use('/completions', completionRoutes);
app.use('/reasons', reasonRoutes);
app.use('/scraps', scrapRoutes);

app.use(express.json({ limit : "30mb", extended: true }));
app.use(express.urlencoded({ limit : "30mb", extended: true }));

// connection URL derived from MongoDB Atlas cloud server
const CONNECTION_URL = "mongodb+srv://mgrist:ofhwtOyg2vauLGY4@pled.p977a.mongodb.net/sandwich?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connects to the specified database URL above with port. If connects successfully, logs a server running message
// and if it doesn't connect, outputs an error message.
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

