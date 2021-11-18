require('dotenv').config()//Importar paquete con tda la configuracion
const { Telegraf } = require('telegraf')//importar telegraf 
const axios = require('axios')//IMportar axios
const bot = new Telegraf(process.env.BOT_TOKEN);//Puerto
const fs = require('fs');
const { json } = require('express');

var json_user = {name: "", lastname: "", request:"", location: "", rol: "", priority: ""};


bot.command('start', ctx => {
    sendStartMessage(ctx);
})
// PAra el Mensaje Principal//
function sendStartMessage (ctx) {
    const startMessage = "Hola "+ ctx.from.first_name + " "  + ctx.from.last_name + ", Bienvenid@ al Bot de Comunicaciones RSA 💪🏼"; 

    bot.telegram.sendMessage(ctx.chat.id, startMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "¿Eres Cliente de Comunicaciones  RSA?", callback_data: 'ComunicacionesRSA'}
                ],
                [
                    {text: "Nuestro website", url: "https://ComunicacionesRSA.com"}
                ],
                [
                    {text: "Creditos", callback_data: 'credits'}
                ],
                [
                    {text: "Exit", callback_data: 'Exit'}
                ]
            ]
        }
    })
}
// Action para Comunicaciones //
bot.action('ComunicacionesRSA', ctx => {
    ctx.answerCbQuery();/// para quitar el boton que esta cargando

    const menuMessage = " ¿"+ ctx.from.first_name + " "  + ctx.from.last_name + " Ya haces Parte de Nosotros?"
    bot.telegram.sendMessage(ctx.chat.id, menuMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Si", callback_data: 'Si'}
                ],
                [
                    {text: "No, se parte de nuestros clientes Registrate aca", url: "https://youtube.com"}
                ],
                [
                    {text: "Exit", callback_data: 'Exit'}
                ]
            ]
        }
    })

})
//Si hace parte de comunicaciones RSA
bot.action('Para Usuario', ctx => {
    ctx.answerCbQuery();

    const menuMessage = " ¿"+ ctx.from.first_name + " "  + ctx.from.last_name + " Eres Usuario o Empleado?"
    bot.telegram.sendMessage(ctx.chat.id, menuMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Usuario", callback_data: 'Usuario'}
                ],
                [
                    {text: "Empleado", callback_data: 'Empleado'}
                ],
                [
                    {text: "Exit", callback_data: 'Exit'}
                ]
            ]
        }
    })
    

})


//Si//
bot.action('Si', ctx => {
    ctx.answerCbQuery();
    ////Nombre los parametros del json
    //json.user.name = ctx.from.first_name;
    //json.user.name = ctx.from.last_name;
    ///////////////////////////
    const menuMessage = " ¿"+ ctx.from.first_name + " "  + ctx.from.last_name + " Es este su Nombre y Apellido??"
    bot.telegram.sendMessage(ctx.chat.id, menuMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Si, ese es mi Nombre y Apellido", callback_data: 'SiNombre'}
                ],
                [
                    {text: "No, No ese no es mi Nombre", callback_data: 'NoNombre'}
                ],
                [
                    {text: "Exit", callback_data: 'Exit'}
                ]
            ]
        }
    })
    

})

///Si esta es el nombre del usuario
bot.action('SiNombre', ctx =>{
    ctx.answerCbQuery();
    ///PAra capturar El nombre y el Apellido en formato tipo json si es el mismo nombre de perfil en telegram
    //json.user.name==ctx.ctx.from.first_name;
    //json.user.name==ctx.ctx.from.first_name;
    const menuMessage = " Vale"+ ctx.from.first_name + " "  + ctx.from.last_name + " Quisieras comentarme cual es Requerimiento"
    bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
        reply_markup: {
            keyboard: [
                [
                    { text: "Soporte" },
                    { text: "Seguridad Informatica"},
                    { text: "Desarrolo Web"},
                    { text: "Necesito un tecnico" }
                ],
                [
                    { text: "Salir", }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })
})
//Selecciono Soporte
bot.hears('Soporte', ctx => {
    ///Capturar  requerimiento Soporte en formato tipo json
   // json.user.request=ctx.message.text;
    bot.telegram.sendMessage(ctx.chat.id, " Vale "+ ctx.from.first_name + " "  + ctx.from.last_name + "Has seleccionado "+ctx.message.text+ " ", );
    json.user.request==ctx.message.text;
})
//Selecciono Seguridad Informatica
bot.hears('Seguridad Informatica', ctx => {
    ///Capturar    Seguridad Informatica en formato tipo json
    //json.user.request=ctx.message.text;
    bot.telegram.sendMessage(ctx.chat.id, " Vale "+ ctx.from.first_name + " "  + ctx.from.last_name + "Has seleccionado "+ctx.message.text+ " ", );
    json.user.request==ctx.message.text;
})
//Selecciono Desarrollo Web
bot.hears('Desarrolo Web', ctx => {
    ///Capturar requerimiento  Desarrollo Web en formato tipo json
   //json json.user.request=ctx.message.text;
    bot.telegram.sendMessage(ctx.chat.id, " Vale "+ ctx.from.first_name + " "  + ctx.from.last_name + "Has seleccionado "+ctx.message.text+ " ", );
    json.user.request==ctx.message.text;
})
//Selecciono Necesito un tecnico
bot.hears('Necesito un tecnico', ctx => {
    //Capturar requerimiento Necesito un tecnico en formato tipo json
    //json.user.request=ctx.message.text;
    bot.telegram.sendMessage(ctx.chat.id, " Vale "+ ctx.from.first_name + " "  + ctx.from.last_name + "Has seleccionado "+ctx.message.text+ ", Por favor envianos tu ubicacion. ", );
    json.user.request==ctx.message.text;
    //json.user.location==ctx.location;
})

//No ese no es mi Nombre y Apellido
bot.action('NoNombre', ctx => {
    
    ctx.reply('¿Entonces Dime cual es tu Nombre?');
    bot.on('text', ctx=>{
        ctx.reply("Su Nombre es "+ctx.message.text+ " ?",);
        ///Capturar el Name del usuario en tipo json
        json.user.name==ctx.message.text;
    })
})

bot.hears(['Si','Sisas','si','sisas','Obvio','obvio','SI','sisa mi so','sisa','Sisa'], (ctx) => ctx.reply('¿Ahora Dime cual es tu Apellido?'))
bot.on('menssage', ctx=>{
    ctx.reply("Su Apellido es "+ctx.message.text+ " ?",);
    ///Capturar el Name del usuario en tipo json
    json.user.last_name==ctx.message.text;
})

//Action para salir//
bot.action('Exit', ctx => {
    ctx.answerCbQuery();

    const ExitMessage = "¿" + ctx.from.first_name + " "  + ctx.from.last_name + " Quisieras Calificar nuestro servicio con el Bot de Comunicaciones RSA?."  
    bot.telegram.sendMessage(ctx.chat.id, ExitMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "1 ⭐️ (Pesimo)", callback_data: '1'}
                ],
                [
                    {text: "2 ⭐️⭐️(Malo)", callback_data: '2'}
                ],
                [
                    {text: "3 ⭐️⭐️⭐️(Regular)", callback_data: '3'}
                ],
                [
                    {text: "4 ⭐️⭐️⭐️⭐️(Bueno)", callback_data: '4'}
                ],
                [
                    {text: "5 ⭐️⭐️⭐️⭐️⭐️ (Excelente)", callback_data: '5'}
                ],
                [
                    {text: "Salir", callback_data: 'Salir'}
                ]
            ]
        }
    })

})
// Para La calificacion //
bot.action('1', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "No haz calificado con 1 ⭐️ (Pesimo) 😭 Mejoraremos para ti " + ctx.from.first_name + " "  + ctx.from.last_name +" ... Gracias por utilizar nuestro servicio de chatbot ❤️. Realizado por y para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
bot.action('2', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "No haz calificado con 2 ⭐️⭐️(Malo) 😕 Mejoraremos para ti " + ctx.from.first_name + " "  + ctx.from.last_name +" ... Gracias por utilizar nuestro servicio de chatbot ❤️. Realizado por y para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
bot.action('3', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "No haz calificado con 3 ⭐️⭐️⭐️(Regular) 🤨🥉 ... Gracias por utilizar nuestro servicio de chatbot ❤️. Realizado por y para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
bot.action('4', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "No haz calificado con 4 ⭐️⭐️⭐️⭐️(Bueno) 😊🥈... Gracias por utilizar nuestro servicio de chatbot ❤️. Realizado por y para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
bot.action('5', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "No haz calificado con 5 ⭐️⭐️⭐️⭐️⭐️ (Excelente) 😍🥇💪🏼... Gracias por utilizar nuestro servicio de chatbot ❤️. Realizado por y para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
    //Envio localizacion//
    bot.on('location', (ctx) => ctx.reply('Listo'+ ctx.from.first_name +  ' Almacenaremos tu locacion y tan pronto veamos tu solicitud te enviamos que dia esta programada tu visita.Gracias por utilizar nuestro servicio de chatbot ❤️ '))
  
//Action para salir
bot.action('Salir', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Gracias por utilizar nuestro servicio de chatbot ❤️, Realizado por y para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
bot.hears(['Salir','SALIR','salir'], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Gracias por utilizar nuestro servicio de chatbot ❤️ , Realizado por y para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
// Creditos//
bot.action('credits', ctx => {
    ctx.answerCbQuery();
    ctx.reply('Creado por Jonh Niño-Julian Saavedra-William Rincon');
})

bot.hears(['GRACIAS','Gracias','gracias'], (ctx) => ctx.reply(' Gracias a ti ' + ctx.from.first_name + ' '+ ctx.from.last_name +  ' por utilizar nuestro servicio de chatbot ❤️ para Comunicaciones RSA, te llevamos en la base de datos y en el ❤️ 😂😂😂.'))


bot.launch()///Inicianilizar el bot
// Ipcion Finalizar
var str_user = JSON.stringify(json_user);
//fs.writeFile('./p