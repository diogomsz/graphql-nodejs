import { gql } from 'apollo-server-core';

export const userTypeDefs = gql`
  type Query {
    user: User!
    users: [User!]!
  }

  type User {
    id: ID!
    userName: String!
  }
`;
