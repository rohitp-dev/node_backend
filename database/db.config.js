const mongoose = require('mongoose');

async function dbConnect() {
    return mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Mongo connected!'))
        .catch((err) => console.error('Mongo connect error: ', err));
}

module.exports = dbConnect
