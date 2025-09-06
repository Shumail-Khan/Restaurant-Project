import express from 'express'
import multer, { diskStorage } from 'multer'
import { addFood, ListFood, removeFood } from '../Controllers/FoodController.js';

const foodRouter = express.Router();

// image store engine
const storage = diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=> {
        cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

foodRouter.post('/addFood', upload.single('image'), addFood);
foodRouter.get('/listFood', ListFood);
foodRouter.post('/removeFood/:id', removeFood);

export default foodRouter;
