const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const schema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  species: {
    type: String,
    enum: ['Dogs', 'Cats', 'Critters', 'Birds'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  livedWith: {
    type: String,
    enum: ['Children', 'Animals'],
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  coat: {
    type: String,
    enum: ['Short', 'Medium', 'Long'],
    required: true,
  },
  data: {
    type: String,
    required: false,
  },
  liked: {
    type: Boolean,
    required: true,
  },
});

module.exports = model('Adoption', schema, 'Adoption');