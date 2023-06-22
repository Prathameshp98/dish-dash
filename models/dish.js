const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dishImage: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
},{timestamps: true});

module.exports = mongoose.model('Dish', DishSchema)