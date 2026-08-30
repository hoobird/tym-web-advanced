import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	productName: { type: String, required: true },
	price: { type: Number, required: true },
	imageUrl: { type: String },
	stockCount: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
