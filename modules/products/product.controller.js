const productService = require('./product.service')

const findAll = async (req, res) => {
    try {
        const products = await productService.findAll();
        return res.send({
            status: 'success',
            data: {
                products,
            },
        });
    } catch (error) {
        console.error('❯❯❯ ERROR [productController.findAll]:- ', error);
        return res.status(500).send({
            status: 'error',
            message: 'Interval server error',
        });
    }
};

const findOne = async (req, res) => {
    try {
        const { _id } = req?.params;

        if (!_id) {
            return res.status(400).send({
                status: 'fail',
                message: 'Invalid request'
            })
        }
        const product = await productService.findOne(_id);

        if (!product) {
            return res.status(404).send({
                status: 'fail',
                message: 'Not found'
            })
        }

        return res.send({
            status: 'success',
            data: { product },
        });
    } catch (error) {
        console.error('ERROR [productController.findOne]:- ', error);
        return res.status(500).send({
            status: 'error',
            message: 'Interval server error',
        });
    }
};

const createOne = async (req, res) => {
    try {
        const productInput = req?.body;

        const product = await productService.createOne(productInput);

        if (!product._id) {
            return res.status(404).send({
                status: 'fail',
                message: 'Error while creating'
            });
        }
        return res.send({ status: 'success', data: { product } });
    } catch (error) {
        console.error('ERROR [productController.createOne]:- ', error);
        return res.status(500).send({
            status: 'error',
            message: 'Interval server error',
        });
    }
};

const updateOne = async (req, res) => {
    try {
        const { _id } = req?.params;
        const productInput = req?.body;
       
        const updateResult = await productService.updateOne(_id, productInput);

        if (updateResult?.matchedCount <= 0) {
            return res.status(404).send({
                status: 'fail',
                message: 'Error while updating'
            });
        }
        return res.send({ status: 'success' });
    } catch (error) {
        console.error('ERROR [productController.updateOne]:- ', error);
        return res.status(500).send({
            status: 'error',
            message: 'Interval server error',
        });
    }
};

const deleteOne = async (req, res) => {
    try {
        const { _id } = req?.params;

        if (!_id) {
            return res.status(400).send({
                status: 'fail',
                message: 'Invalid request'
            });
        }
        const deleteResult = await productService.deleteOne(_id);

        if (deleteResult?.deletedCount <= 0) {
            return res.status(404).send({
                status: 'fail',
                message: 'Error while deleting'
            });
        }
        return res.send({ status: 'success' });
    } catch (error) {
        console.error('ERROR [productController.deleteOne]:- ', error);
        return res.status(500).send({
            status: 'error',
            message: 'Interval server error',
        });
    }
};

module.exports = { findAll, findOne, createOne, updateOne, deleteOne }
