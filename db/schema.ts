import mongoose from "mongoose";

const kittySchema = new mongoose.Schema(
    {name: {type: String , required: true}},
    {timestamps: true}
)

const kitten = mongoose.models.Kitten || mongoose.model('Kitten', kittySchema);
export default kitten;