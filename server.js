const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('name', (name) => {
    return `my name is ${name}`
})

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(now, req.method, req.url);
    next();
})

app.get('/', (req, res) => {
    res.send('welcome');
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        text1: "yo",
        text2: "ho",
        year: 1564
    })
})

app.get('/projects', (req, res) => {
    res.render('project.hbs');
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});