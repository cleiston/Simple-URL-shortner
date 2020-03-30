const express = require('express')
const app = express()
const routes = require('./src/routes');

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))
app.use(routes);

app.listen(process.env.PORT || 3333);