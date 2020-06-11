const discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

    message.channel.send("Sei sicuro di pulire il comando .sconti");
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 17000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();

            if(response === "no") {
                message.channel.send("Annullato");
            }

            if(response === "si") {
                fs.unlink("./cmd/gta/sconti.txt", (err) => {
                    if (err) {
                      console.error(err);
                }})
                message.channel.send("Fatto!");
            }

        }).catch("Tempo scaduto")
};