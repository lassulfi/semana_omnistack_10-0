const PORT = 3333;

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const routes = require('./routes')

mongoose.connect('mongodb://root:root@localhost:27017/omnistack?connectTimeoutMS=300000', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(PORT);