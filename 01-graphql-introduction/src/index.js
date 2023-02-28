import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      height: Float
      married: Boolean!
    }
  `,
  resolvers: {
    Query: {
      id: () => '123id',
      name: () => 'Diogo Martins de Assis',
      age: () => 20,
      height: () => 1.75,
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on URL: ${url}`);
});
