import Category from "../models/Category.js";
import fs from 'fs';

export const createCategory = async (req, res) => {
    try {
        let image_filename = `${req.file.filename}`;
        console.log("Uploaded file:", req.file);
        const { title, description } = req.body;

        const category = new Category({
            title,
            description,
            image: image_filename
        });

        await category.save();
        res.status(201).json({
            success: true,
            data: category,
            message: "Category created successfully"
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating category" });
    }
}

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).populate('items');
        res.status(200).json({
            success: true,
            data: categories,
            message: "Categories retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving categories" });
    }
}

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        if (req.file) {
            fs.unlink(`uploads/${category.image}`, (err) => {
                if (err) {
                    console.error("Error removing image:", err);
                }
            });
            let image_filename = `${req.file.filename}`;
            category.image = image_filename;
        }
        category.title = req.body.title || category.title;
        category.description = req.body.description || category.description;
        await category.save();
        res.status(200).json({
            success: true,
            data: category,
            message: "Category updated successfully"
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating category" });
        }
}

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        fs.unlink(`uploads/${category.image}`, (err) => {
            if (err) {
                console.error("Error removing image:", err);
            }
        });
        await Category.findByIdAndDelete(id);
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting category" });
    }
}