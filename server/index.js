const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require('dotenv').config()

const DB = process.env.Mongo;

const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connection successful");
    return server.listen({ port: 4000 })
  })
  .then((res) => {
    console.log(`Server running at: ${res.url}`)
  })