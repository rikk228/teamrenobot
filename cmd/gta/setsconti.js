const discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

    message.channel.send("Dimmi gli sconti settimanali, segui questo path: \n \n ***Sconti settimanali [settimana]: *** \n\n ***Veicolo sul Podio:*** \n\n - \n\n  ***Soldi Doppi / Soldi tripli : *** \n\n - \n\n - \n\n***Sconti:*** \n\n\ - \n\n - \n\n ***Veicoli Aggiunti:*** \n\n - \n\n Per maggiori informazioni recatevi qui: \n https://gamegrind.it");    const filter = m => m.author.id === message.author.id;
    message.channel.send("Hai 15 minuti.");
    message.channel.awaitMessages(filter, { max: 1, time: 900000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();

            if(response === "annulla") {
                return message.channel.send("Annullato");
            } else {
                if(!"./cmd/gta/sconti.txt") {
                    fs.unlink("./cmd/gta/sconti.txt", (err) => {
                        if (err) {
                          console.error(err);
                        }})
                }
                fs.appendFile('./cmd/gta/sconti.txt', response, (err) => {
                    if (err) throw err;
                  });
                message.channel.send("Fatto!");
            }
        }).catch("Tempo scaduto")

};