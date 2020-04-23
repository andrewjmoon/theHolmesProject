import mockBTAS from '../data/BTAS';
import mockJQ from '../data/JQ';
//import mockBBY from "../data/BBY";

const getChapters = ({ limit = 10, offset = 0 }) =>
  mockBTAS
    .slice(offset, offset + limit)
    .map((chapter) => ({ ...chapter, __typename: 'Chapter' }));

const getJQ = ({ limit = 10, offset = 0 }) =>
  mockJQ
    .slice(offset, offset + limit)
    .map((chapter) => ({ ...chapter, __typename: 'Chapter' }));

export default {
  defaults: {
    chapters: getChapters({}),
    chapters2: getJQ({}),
  },
  resolvers: {
    Query: {
      chapters: (_, variables) => getChapters(variables),
      chapters2: (_, variables) => getJQ(variables),
    },
  },
};
