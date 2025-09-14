import mongoose from 'mongoose';
const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }
    ]
});

const Category = mongoose.model('Category', categorySchema);
export default Category;