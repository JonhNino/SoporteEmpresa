const express = require('express'); //Importacion del paquete express
const http = require('http');   //Para manejar protocolo Http paquete por defecto instalado y escuchar peticiones
const app = express();/// para crear el proceso, app es el servidor
const server =http.createServer(app);//para crear el servidor http soportado por app o express; 
const path = require('path');/// Permite hacer uso de las direcciones del sistema de manera mas optimizada

//Settings configuraciones express
app.set('port',4000);//Se define una variable para nombrar el ppuerto a utilzar
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Midlewares Funciones que se ejecutan atnes que la rutan procesen algo  

///Routers del servidor
app.use(require('./Routers/Home'));///Ruta Inicial para la pagina

///Static Files archivos imagens css fuentes archivos js icones 
// son archivos para mejorear la interfaz o el front end de la app
app.use(express.static(path.join(__dirname,'Public')));///Va a usar los estaticos que estan en la carpeta public 

// ///cuando alguien haga un peticion a get
// app.get('./',(req, res)=>{
//     res.sendfiles(path.resolve(__dirname,'_/Views/Index.html'));

// });
///Para escuchar el servidor
app.listen(app.set('port'),()=>{//Para cuadrar el puerto para el lcoal hosts
    console.log('Server on Port',app.set('port'));
}); 