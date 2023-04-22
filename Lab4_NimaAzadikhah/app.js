// Nima Azadikhah
// Lab4
//Date: 21/04/2023



const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config({path: './process.env'});

const DB_CONN = process.env.MONGO_STRING.replace('<password>', process.env.MONGO_PASS);
mongoose.connect(DB_CONN, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('Database Connection Successful!')).catch((err) => console.log(`DB Connection ERROR: ${err}`));

const app = express();

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

// let us parse json on the req.body
app.use(express.json());

// lets us parse URL-encoded req.body

app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/animal'));


const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});