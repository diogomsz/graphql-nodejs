import { gql } from 'apollo-server-core';

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

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];
