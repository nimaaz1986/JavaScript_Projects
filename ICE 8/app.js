const express = require('express')
const exphbs = require('express-handlebars');
const PORT = 3000;


// create the express app

const app = express();


// set up the express-Handlebars engine

app.engine('.hbs', exphbs.engine({ defaultLayout: 'main',extname: '.hbs', partialsDir: ''}));
app.set('view engine', '.hbs');
app.set('views', './views');

// engage the middleware

app.use((req, res, next) =>{
    console.log(`URL: ${req.url}`);
    req.myName = 'Nima'
    next();
});

// additional middleware xan be added here, like authentication, error jandling , authorization

// route to '/' with get method
app.get('/', (req, res) =>{
    // res.send(`Hello ${req.myName}, Webd 6201 World!! This is using Nodemon`);
    res.render('home');
});

app.get('/application', (req, res) => {
    res.render('application');
  });

app.get('/about' , (req, res) =>{
    res.send('This is the about page for our Express app.')
});

app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`);
});