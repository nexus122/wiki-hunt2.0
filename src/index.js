/* Express */
const express = require('express')
const app = express();
const port = process.env.PORT || 3000

/* Cors aceptar peticiones de otras webs */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api/',require('./routes/find'));

// Static files
app.use(express.static(__dirname+'/public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})