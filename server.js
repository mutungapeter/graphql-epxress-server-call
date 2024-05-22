const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/typeDefs');
const bookHandler = require('./src/bookHandler');

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers: bookHandler });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
