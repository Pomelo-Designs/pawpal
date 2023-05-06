const Adoption = require("../models/Adoption");

const resolvers = {
  Query: {
    animal: async (parent, { id }) => {
      // Find the animal with the specified ID in the database
      const animal = await Adoption.findOne({ id });

      if (!animal) throw new Error(`Animal with ID ${id} not found`);

      return animal.toObject(); // convert the Mongoose document to a plain object
    },
    animals: async (parent, { input: { liked, age, gender, species, livedWith, sortByAge, sortBySize, limit, offset } }) => {
      // Create a Mongoose query object
      const query = Adoption.find();

      // Apply filters
      if (liked !== undefined) query.where('liked').equals(liked);

      if (age) query.where('age').equals(age);

      if (gender) query.where('gender').equals(gender);

      if (species) query.where('species').equals(species);

      if (livedWith) query.where('livedWith').equals(livedWith);

      // Apply sorting
      if (sortByAge) {
        const sortOrder = sortByAge === 'ASC' ? 1 : -1;
        query.sort({ age: sortOrder });
      }

      if (sortBySize) {
        const sortOrder = sortBySize === 'ASC' ? 1 : -1;
        query.sort({ size: sortOrder });
      }

      // Apply pagination
      if (limit !== undefined) query = query.limit(limit);

      if (offset !== undefined) query = query.skip(offset);

      // Execute the query and return the results as an array of plain objects
      const animals = await query.exec();
      return animals.map((animal) => animal.toObject());
    },
  },
  Mutation: {
    updateAnimalLiked: async (parent, { id, liked }) => {
      // Find the animal with the specified ID in the database
      const animal = await Adoption.findOne({ id });

      if (!animal) throw new Error(`Animal with ID ${id} not found`);

      // Update the animal's "liked" field
      animal.liked = liked;

      // Save the changes to the database and return the updated animal as a plain object
      await animal.save();
      return animal.toObject();
    },
  },
}

module.exports = { resolvers }