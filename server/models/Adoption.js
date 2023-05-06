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
    enum: ['dog', 'cat', 'critter', 'bird'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  livedWith: {
    type: String,
    enum: ['children', 'animals'],
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  coat: {
    type: String,
    enum: ['short', 'medium', 'long'],
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