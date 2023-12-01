const Product = require('./product.model')

const findAll = async () => {
    try {
        return Product.find({});
    } catch (error) {
        console.error('ERROR [productService.findAll]:- ', error);
        throw new Error(error?.message || error);
    }
};

const findOne = async (_id) => {
    try {
        return Product.findOne({ _id });
    } catch (error) {
        console.error('ERROR [productService.findOne]:- ', error);
        throw new Error(error?.message || error);
    }
};

const createOne = async (input) => {
    try {
        return Product.create(input);
    } catch (error) {
        console.error('ERROR [productService.createOne]:- ', error);
        throw new Error(error?.message || error);
    }
};

const updateOne = async (_id, input) => {
    try {
        return Product.updateOne({ _id }, input);
    } catch (error) {
        console.error('ERROR [productService.updateOne]:- ', error);
        throw new Error(error?.message || error);
    }
};

const deleteOne = async (_id) => {
    try {
        return Product.deleteOne({ _id });
    } catch (error) {
        console.error('ERROR [productService.deleteOne]:- ', error);
        throw new Error(error?.message || error);
    }
};

module.exports = { findAll, findOne, createOne, updateOne, deleteOne }
