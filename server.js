const express = require('express')
const app = express();
const port = 3000;
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.get('/logs', (req, res) => {
    res.send('new')
})
app.get('/logs/new', (req, res) => {
    res.render('New')
})
app.listen(port, () => {
    console.log(`Listening to port: ${port} `)
})