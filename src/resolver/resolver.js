const Product = require("../model/Product");
const Comment = require("../model/Comment");

const resolvers = {
  Query: {
    products: async (parent, args) => {
      return await Product.find();
    },
    product: async (parent, args) => {
      return await Product.findOne({ id: args.id });
    },
    comment: async (parent, args) => {
      return await Comment.findOne({ id: args.id });
    },
  },
  Comment: {
    product: async (parent, args) => {
      return await Product.findOne({ id: parent.productID });
    },
  },
  Product: {
    comments: async (parent, args) => {
      return await Comment.find({ productID: parent.id });
    },
  },
};

module.exports = resolvers;
