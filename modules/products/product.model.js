const moment = require('moment');
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true,
    auto: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 255,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['industry', 'medical', 'glossary', 'electrical'],
    maxlength: 64,
    trim: true
  },
  manufactured_date: {
    type: Number,
    required: true,
    default: moment().unix()
  },
  price: {
    type: Number,
    required: true,
    maxlength: 64,
    default: 0
  },
  image: {
    type: String,
    trim: true,
    default: null
  },
  description: {
    type: String,
    trim: true,
    default: null
  },
}, { collation: { locale: 'en_US', strength: 1 } });

module.exports = mongoose.model('Product', productSchema);
