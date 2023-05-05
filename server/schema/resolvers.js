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
      const filteredAnimals = animals.filter((animal) => {
        if (input.liked !== undefined && animal.liked !== input.liked) {
          return false;
        }

        if (input.age && animal.age !== input.age) {
          return false;
        }

        if (input.gender) {
          if (input.gender === 'male' && animal.gender !== 'male') {
            return false;
          }

          if (input.gender === 'female' && animal.gender !== 'female') {
            return false;
          }
        }

        if (input.species) {
          if (input.species === 'dog' && animal.species !== 'dog') {
            return false;
          }

          if (input.species === 'cat' && animal.species !== 'cat') {
            return false;
          }

          if (input.species === 'critter' && animal.species !== 'critter') {
            return false;
          }

          if (input.species === 'bird' && animal.species !== 'bird') {
            return false;
          }
        }

        if (input.livedWith) {
          if (input.livedWith === 'children' && animal.livedWith !== 'children') {
            return false;
          }

          if (input.livedWith === 'animals' && animal.livedWith !== 'animals') {
            return false;
          }
        }

        return true;

      });
      // Sort the filtered animals based on the age field
      if (input.sortByAge === 'asc') {
        filteredAnimals.sort((a, b) => a.age - b.age);
      } else if (input.sortByAge === 'desc') {
        filteredAnimals.sort((a, b) => b.age - a.age);
      }

      // Sort the filtered animals based on the size field
      if (input.sortBySize === 'asc') {
        filteredAnimals.sort((a, b) => a.size - b.size);
      } else if (input.sortBySize === 'desc') {
        filteredAnimals.sort((a, b) => b.size - a.size);
      }

      return filteredAnimals.slice(input.offset, input.limit + input.offset);
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