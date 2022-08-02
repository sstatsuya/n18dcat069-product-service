const Product = require("../model/Product");

const resolvers = {
  Query: {
    products: async (parent, args) => {
      return await Product.find();
    },
    product: async (parent, args) => {
      return await Product.findOne({id: args.id});
    },
  },
};

module.exports = resolvers;
