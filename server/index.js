const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const app = express();

//Connect to MongoDB
connectDB();

app.use(cors());

//Open express server on specified port
app.listen(port, console.log(`Server running on port: ${port}`));

//Setup single graphql endpoint 
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}));
