const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

const PORT = process.env.PORT || 8000;

const app = express();

app.listen(PORT, console.log(`Server running on port ${PORT}`));