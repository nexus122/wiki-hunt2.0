const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const router = express.Router();

/* Wiki.js */
const wiki = require('wikijs').default;



/* Funciones */

function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
  }

function search(param, leng) {
    return new Promise(function (resolve) {
        if (leng != "en") {
            try {
                wiki({ apiUrl: `https://${leng}.wikipedia.org/w/api.php` }).page(param)
                    .then(page => page.summary())
                    .then(data => resolve(data))
                    .catch(err => {
                        console.log("Error: ", err);
                        resolve({ data: "nodata" })
                    })
            } catch (e) {
                resolve({ data: "nodata" })
            }
        } else {
            try {
                wiki().page(param)
                    .then(page => page.summary())
                    .then(data => resolve(data))
                    .catch(err => {
                        console.log("Error: ", err);
                        resolve({ data: "nodata" })
                    })
            } catch (e) {
                resolve({ data: "nodata" })
            }
        }

    })
}

function termsController(enlace) {
    var arrControlTerms = ["archivo","anexo","issn","template","edit","wiki", "editar", "ayuda", "d:", "wikidata", "wikipedia", "especial", "(aún no redactado)", "portal", "commons", "page does not exist", "help", "desambiguation"];
    var flag = 0;
    arrControlTerms.forEach(element => {
        if (enlace.toLowerCase().includes(element)) {
            flag++
        }
    })

    if (flag != 0) {
        return false
    } else {
        return true
    }

}

function links(termino, leng, limite) {
    return new Promise((resolve) => {
        request(`https://${leng}.wikipedia.org/wiki/${termino}`, (err, res, body) => {
            if (!err && res.statusCode == 200) {
                console.log("URL: ", `https://${leng}.wikipedia.org/wiki/${termino}`);                
                
                /* Guardamos el cuerpo de la respuesta en el $ para poder utilizar jquery y seleccionar */
                let $ = cheerio.load(body);

                /* Comprobamos si el limite mandado es correcto o demasiado grande */
                if($("#content a").length < limite){
                    limite = $("#content a").length
                }

                console.log("Limite: ", limite);

                var arrLinks = [];
                                
                $("#content a").slice(0, limite).each(element => {
                    var enlace = $("#content a").eq(element).attr("title");                    
                    if (enlace != undefined && enlace.length > 1) {
                        if (termsController(enlace)) {
                            if (arrLinks.indexOf(enlace) == -1) {                                    
                                arrLinks.push(enlace.replace("Categoría:", "").replace("Category:", ""));
                            }
                        }
                    }
                })

                //console.log(arrLinks);
                resolve(arrLinks);

            }
        })
    })
}

function random(leng) {
    return new Promise((resolve) => {
        var data = wiki({ apiUrl: `https://${leng}.wikipedia.org/w/api.php` }).random(1);
        resolve(data);
    })
}

/* Llamadas y rutas */
router.get('/', (req, res) => {
    res.sendFile('../views/index.html', { root: __dirname })
})

/* Peticion de una pagina Random */
router.get('/random/:leng', async function (req, res) {
    let leng = req.params.leng;
    var randomRes = await random(leng)
    console.log("Random: ", randomRes);

    var infoRes = await search(randomRes[0], leng);
    if (infoRes.data == "nodata") {
        infoRes = "";
    }
    var linksRes = await links(encode_utf8(randomRes[0]), leng, 1000);

    var resp = {
        nombre: randomRes[0],
        info: infoRes,
        links: linksRes,
    }

    console.log("Respuesta: ", resp)
    res.json(resp);
});

/* Peticion de una pagina especifica */
router.get('/buscar/:leng/:id/:objective', async function (req, res) {
    let leng = req.params.leng;
    let id = req.params.id;
    let objective = req.params.objective;
    if(id == objective){
        console.log("Has ganado");
        var resp = {
            nombre: "Has Ganado 🥳",
            info: `Solo has necesitado ${hilo.caminos.length} pasos para encontrar a ${objective}`,
            links: '',
        }
        res.json(resp);
    }else{
        console.log(id);
        console.log("Busqueda: ", id);

        var infoRes = await search(id, leng);
        if (infoRes.data == "nodata") {
            infoRes = "";
        }
        var linksRes = await links(encode_utf8(id), leng, 1000);

        var resp = {
            nombre: id,
            info: infoRes,
            links: linksRes,
        }
        console.log("Respuesta: ", resp)
        res.json(resp);
    }
});

module.exports = router;