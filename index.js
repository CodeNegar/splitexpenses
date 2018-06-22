const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose  = require('mongoose');
const port = 3000;

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/splitexpenses', {
    // useMongoClient: true /* Not necessart since version 5 */
})
.then(() => console.log('MongoDB Connected'))
.catch((error) => console.log(error));

// Register Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
    console.log('Split Expenses app started');
});
