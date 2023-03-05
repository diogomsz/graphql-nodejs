import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
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
          id: 'diogomsz1',
          userName: 'Diogo Martins de Assis',
        };
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on URL: ${url}`);
});
