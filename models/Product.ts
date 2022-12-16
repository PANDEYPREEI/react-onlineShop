
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {type: String, required: true},
    products: [
        {
            productId: {type: String},
            productName: {type: Number, default:1}
        }
    ],

},
{timestamps : true});

export default mongoose.model("Product",ProductSchema);