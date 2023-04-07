require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

// const Log = require('./models/logs');
const app = express();
const port = 3000;
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
app.get('/logs', (req, res) => {
    res.send('new')
})
app.get('/log/:id', (req, res) => {
    res.render('Show')
})

app.get('/logs/new', (req, res) => {
    res.render('New')
})
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken == 'on') {
        req.body.shipIsBroken = true
    }
    else {
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (err, createdLog) => {
        res.redirect('/logs/:id')
    })
    // res.send(req.body)
})
app.listen(port, () => {
    console.log(`Listening to port: ${port} `)
})