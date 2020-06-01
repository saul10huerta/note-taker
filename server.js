const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Express.js middleware that instructs the server to make certain files readily available
//important to serve all front end as well as JSON data
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});