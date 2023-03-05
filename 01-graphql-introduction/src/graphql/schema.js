import { gql } from 'apollo-server-core';

const rootTypeDefs = gql`
  type Query {
    user: User!
    users: [User!]!
  }
`;

export const typeDefs = [rootTypeDefs];
export const resolvers = [];
