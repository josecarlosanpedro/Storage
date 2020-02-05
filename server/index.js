import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import cors from 'cors';
import "core-js/stable";
import "regenerator-runtime/runtime";
import mongoose from 'mongoose';
import graphQLSchema from './graphql/schema';
import graphQLResolvers from './graphql/resolvers/handlerGenerators';
require('dotenv').config();
const app = express();
app.use(
  cors(),
  bodyParser.json()
)
app.use(
  "/graphql",
  expressGraphQL({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
  })
);
function main() {
  const port = process.env.PORT || 3002;
  const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds157839.mlab.com:57839/spiralworks_exam`;
  mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
      app.listen(port, () => console.log(`Server is listening on port: ${port}`));
    })
    .catch(err => {
      console.log(err);
    })
}
main();