import { gql } from 'apollo-server-core';
import { userTypeDefs } from './user/typeDefs';

const rootTypeDefs = gql`
  type Query {
    hello: String
  }
`;

const rootResolvers = {
  Query: {
    hello: () => 'Hello World',
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers];
