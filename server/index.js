import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import orderRoutes from './routes/workOrders.js';

const app = express();

//localhost.com:5000/work-orders
app.use('/work-orders', orderRoutes);

app.use(express.json({ limit : "30mb", extended: true }));
app.use(express.urlencoded({ limit : "30mb", extended: true }));
app.use(cors());

// connection URL derived from MongoDB Atlas cloud server
const CONNECTION_URL = "mongodb+srv://mgrist:ofhwtOyg2vauLGY4@pled.p977a.mongodb.net/sandwich?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connects to the specified database URL above with port. If connects successfully, logs a server running message
// and if it doesn't connect, outputs an error message.
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

