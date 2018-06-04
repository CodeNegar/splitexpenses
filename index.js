const express = require('express');
const exphbs  = require('express-handlebars');
const port = 3000;

const app = express();

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
