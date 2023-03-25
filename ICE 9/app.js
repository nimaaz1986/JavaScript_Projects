const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');

//CONFIGURATIONS
dotenv.config({path:  "./process.env"});


// CREATE APP

const app = express();

// RENDER ENGINE
app.engine(
    '.hbs', 
    exphbs.engine({
        defaultLayout: 'main', 
        partialsDir: './views/partials', 
        extname: '.hbs'
    })
);

app.set('view engine', '.hbs');
app.set('views', './views');

//ROUTER

app.use('/', require('./routes/user'));

// CREATE SERVER

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});