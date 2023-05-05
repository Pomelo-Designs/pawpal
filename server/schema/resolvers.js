const { animals } = require("../FakeData");

const resolvers = {
  Query: {
    animal: (parent, { id }) => {
      // Find the animal with the specified ID
      const animal = animals.find((animal) => animal.id === id);

      if (!animal) {
        throw new Error(`Animals with ID ${id} not found`);
      }

      return animal;
    },
    animals: (parent, { input }) => {
      // Filter animals based on the input variables
      return animals.filter((animal) => {
        if (input.liked !== undefined && animal.liked !== input.liked) {
          return false;
        }

        if (input.year && animal.year !== input.year) {
          return false;
        }

        return true;
      });
    },
  },
  Mutation: {
    updateAnimalLiked: (parent, { id, liked }) => {
      // Find the animal with the specified ID
      const animal = animals.find((animal) => animal.id === id);

      if (!animal) {
        throw new Error(`Animal with ID ${id} not found`);
      }

      // Update the animal's "liked" field
      animal.liked = liked;

      return animal;
    },
  },
};

module.exports = { resolvers };