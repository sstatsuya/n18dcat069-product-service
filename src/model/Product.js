const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = new Schema(
  {
    id: { type: String },
    name: { type: String },
    price: { type: Number },
    sale: { type: Number },
    sold: { type: Number },
    rate: { type: Number },
    type: { type: Array },
    description: { type: Array },
    splash: { type: String },
    images: { type: Array },
  },
  { collection: "product" }
);

module.exports = mongoose.model("product", Product);
