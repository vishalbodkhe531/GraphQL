import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";

const port = Number(process.env.PORT) || 3000;

const server = new ApolloServer({
  typeDefs: `type Query {
    hello: String
  }`,
  resolvers: {
    Query: {
      hello: () => "Hello, world!",
    },
  },
});

startStandaloneServer(server, {
  listen: { port },
})
  .then(() => {
    console.log(
      "Server is working on Port:" + port + " in " + envMode + " Mode."
    );
  })
  .catch((err) => {
    console.log(err);
  });
