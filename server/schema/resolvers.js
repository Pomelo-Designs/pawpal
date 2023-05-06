const Adoption = require("../models/Adoption");

const resolvers = {
  Query: {
    adoption: async (parent, { id }) => {
      // Find the adoption with the specified ID in the database
      const adoption = await Adoption.findOne({ id });

      if (!adoption) throw new Error(`Adoption with ID ${id} not found`);

      return adoption.toObject(); // convert the Mongoose document to a plain object
    },
    adoptions: async (parent, { input: { liked, age, gender, species, livedWith, sortByAge, sortBySize, limit, offset } }) => {
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
      const adoptions = await query.exec();
      return adoptions.map((adoption) => adoption.toObject());
    },
  },
  Mutation: {
    updateAdoptionLiked: async (parent, { id, liked }) => {
      // Find the adoption with the specified ID in the database
      const adoption = await Adoption.findOne({ id });

      if (!adoption) throw new Error(`Adoption with ID ${id} not found`);

      // Update the adoption's "liked" field
      adoption.liked = liked;

      // Save the changes to the database and return the updated adoption as a plain object
      await adoption.save();
      return adoption.toObject();
    },
  },
}

module.exports = { resolvers }