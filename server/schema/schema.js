const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID, GraphQLSchema } = graphql;

const animals = [
  {
    name: 'Charlie',
    age: 2,
    species: 'dog',
    gender: 'male',
    livedWith: 'children',
    size: 20,
    coat: 'medium',
    data: '',
    id: "1",
    liked: false
  },
  {
    name: 'Greg',
    age: 10,
    species: 'dog',
    gender: 'male',
    livedWith: 'children',
    size: 12,
    coat: 'short',
    data: '',
    id: "2",
    liked: false
  }
];

const AnimalType = new GraphQLObjectType({
  name: 'Animal',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    species: { type: GraphQLString },
    gender: { type: GraphQLString },
    livedWith: { type: GraphQLString },
    size: { type: GraphQLInt },
    coat: { type: GraphQLString },
    data: { type: GraphQLString },
    liked: { type: GraphQLBoolean },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    status: {
      type: GraphQLString,
      resolve(parent, args) {
        return "Welcome to GraphQL"
      }
    },
    animal: {
      type: AnimalType,
      args: {
        // id: { type: GraphQLID },
        species: { type: GraphQLString },
        gender: { type: GraphQLString },
        livedWith: { type: GraphQLString },
      },
      resolve(parent, args) {
        return _.find(animals, { 
          // 'id': args.id, 
          'species': args.species,
          'gender': args.gender,
          'livedWith': args.livedWith
        })
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});