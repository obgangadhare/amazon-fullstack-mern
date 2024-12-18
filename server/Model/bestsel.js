// import the mongoose package
const mongoose = require('mongoose');

// create a Schema
const Schema = mongoose.Schema;

const bestselSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
       
        price: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
            required: true,
        }
    }
);

// export the model
module.exports = mongoose.model('Bestsel', bestselSchema, 'bestsel');