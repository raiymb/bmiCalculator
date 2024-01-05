const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./config/mongoose'); 
const bmiRoutes = require('./routes/bmiRoutes');
const path = require('path');

const app = express();
const port = 3000;

connectDb();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', bmiRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});