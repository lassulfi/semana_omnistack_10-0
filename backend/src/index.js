const PORT = 3333;

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');

const routes = require('./routes');

const MONGODB_USER = 'root';
const MONGODB_PASSWORD = 'root';
const DB_NAME = 'omnistack';

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@localhost:27017/${DB_NAME}?authSource=admin&readPreference=primary&ssl=false`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORT);