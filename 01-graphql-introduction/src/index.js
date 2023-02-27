import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      test: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello World';
      },
      test: () => {
        return 'Just a test';
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on URL: ${url}`);
});
