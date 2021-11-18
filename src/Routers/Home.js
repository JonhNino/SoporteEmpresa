//este Js es para ubicar las rutas que se utilizaran en el servidor
const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{///Ruta inicial
    res.render('Login.html',{title: 'Login Comunicaciones RSA'});// cada vez que alguien entre a la ruta inicial
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});///cada vez que visisten esta ruta se le envia la ruta Index.html

router.get('/Index',(req, res)=>{///Ruta inicial
    res.render('Index.html',{title: 'Home Comunicaciones RSA'});// cada vez que alguien entre a la ruta inicial
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});///cada vez que visisten esta ruta se le envia la ruta Index.html

router.get('/Segunda',(req, res)=>{///Ruta Contacto
    res.render('Segunda.html',{title: 'Comunicaciones'});///NOmbre de la seugnda ruta
    // cada vez que alguien entre a la ruta Segunda
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});

router.get('/ChatBot',(req, res)=>{///Ruta Contacto
    res.render('ChatBot.html',{title: 'ChatBot'});///NOmbre la ruta ChatBot
    // cada vez que alguien entre a la ruta ruta ChatBot
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});

router.get('/ComunicacionesRSA',(req, res)=>{///Ruta Contacto
    res.render('ComunicacionesRSA.html',{title: 'ComunicacionesRSA'});///NOmbre la ruta ChatBot
    // cada vez que alguien entre a la ruta ruta ChatBot
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});
module.exports = router;  