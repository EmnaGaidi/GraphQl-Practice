import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { db } from "./db/db.mjs";
import { Query } from "./resolvers/Query.mjs";
import { Cv } from "./resolvers/Cv.mjs";
import { Mutation } from "./resolvers/Mutation.mjs";
import { createPubSub } from "graphql-yoga";
import fs from "fs";
const pubSub = createPubSub();
const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ fs.readFileSync(
      "src/schema/schema.graphql",
      "utf-8"
    ),
    resolvers: {
      Query,
      Cv,
      Mutation,
    },
  }),
  context: { db, pubSub },
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
