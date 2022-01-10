import express from "express";
import schema from "./data/schema";
import { graphqlHTTP } from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    graphiql: root
}));

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));