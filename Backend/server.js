import connectDB from './Config/Database.js';
import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/User_routes.js';
import foodRouter from './Router/foodRouter.js';
import categoryrouter from './Routes/Category_routes.js';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/users', userRoutes);
app.use('/api/food', foodRouter);
app.use('/api/category', categoryrouter);
app.use("/images", express.static('uploads'))

app.listen(process.env.PORT, () => {
    
    console.log(`Server running on port ${process.env.PORT}`);
});