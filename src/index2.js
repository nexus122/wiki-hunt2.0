const cheerio = require('cheerio');
const request = require('request');

/* Wiki.js */
const wiki = require('wikijs').default;

/* Express */
const express = require('express')
const app = express();
const port = 3000
function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
  }

function image(termino) {
    return new Promise(function (resolve) {
        wiki({ apiUrl: `https://es.wikipedia.org/w/api.php` }).page(termino).then(page => page.mainImage()).then(data => resolve(data));
    });
}

function summary(termino) {
    return new Promise(function (resolve) {
        wiki({ apiUrl: `https://es.wikipedia.org/w/api.php` }).page(termino).then(page => page.summary()).then(data => resolve(data));
    });
}

app.get('/personaje/:id', async function (req, res) {
    let id = req.params.id;
    console.log(id);
    var mainImage = await image(encode_utf8(id));
    var mainSummary = await summary(encode_utf8(id));   

    var resp = {summary: mainSummary, img: mainImage};

    res.json(resp);
});

// Static files
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})