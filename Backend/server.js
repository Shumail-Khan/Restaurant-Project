import connectDB from './Config/Database.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server running on port ${process.env.PORT}`);
});