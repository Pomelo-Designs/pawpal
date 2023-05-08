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
    enum: ['DOGS', 'CATS', 'CRITTERS', 'BIRDS'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
    required: true,
  },
  livedWith: {
    type: String,
    enum: ['CHILDREN', 'ANIMALS'],
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  coat: {
    type: String,
    enum: ['SHORT', 'MEDIUM', 'LONG'],
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