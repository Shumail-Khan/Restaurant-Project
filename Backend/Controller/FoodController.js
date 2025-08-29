import foodModel from "../models/FoodModel";
import fs from 'fs'



export const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`
    const {name, description, price,  category} = req.body;

    try {
        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: image_filename   
            
        });

        await food.save();
        res.status(201).json({
            success: true,
            data: food,
            message: "Food item added successfully"
        });
    } catch (error) {
        res.status(500).json({ message: "Error adding food item" });
    }
}



export const ListFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.status(200).json({
            success: true,
            data: foods,
            message: "Food items retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving food items" });
    }
}

// remove food item
export const removeFood = async (req, res) => {
    const { id } = req.params;
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.error("Error removing image:", err);
            }
        });
       await foodModel.findByIdAndDelete(req.body.id);
       res.status(200).json({ message: "Food item removed successfully" }); 
    } catch (error) {
        res.status(500).json({ message: "Error removing food item" });
    }
}