import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
    }
  `,
  resolvers: {
    Query: {
      id: () => 1,
      name: () => 'Diogo Martins de Assis',
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on URL: ${url}`);
});
