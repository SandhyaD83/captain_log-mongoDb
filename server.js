const express = require('express')
const app = express();
const port = 3000;
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})
app.get('/logs', (req, res) => {
    res.send('new')
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
    res.send(req.body)
})
app.listen(port, () => {
    console.log(`Listening to port: ${port} `)
})