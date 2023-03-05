import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '1',
          userName: 'Diogo',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            userName: 'Diogo',
          },
          {
            id: '2',
            userName: 'Maria',
          },
          {
            id: '3',
            userName: 'Lucas',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on URL: ${url}`);
});
