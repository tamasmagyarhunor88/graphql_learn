import express from "express";
import schema from "./schema";
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { friend: () => {
    return {
        "id": 324243,
        "firstName": "Magyar-Hunor", "lastName": "Tamas",
        "gender": "Male",
        "email": "tamasmagyarhunor88@gmail.com"
    }
}};

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: root
}));

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));