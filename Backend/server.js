import connectDB from './Config/Database.js';
import express from 'express';
import cors from 'cors';
import foodRouter from './Router/foodRouter.js';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});




app.use('/api/food', foodRouter);
app.use("/images",express.static('uploads'))

app.listen(process.env.PORT, () => {
    
    console.log(`Server running on port ${process.env.PORT}`);
});