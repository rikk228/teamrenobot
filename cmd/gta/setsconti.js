const discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

    const guild_id_path = `./guild/${message.guild.id}`;
    
    message.channel.send("Hai 15 minuti.");
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 900000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();

            if(response === "annulla") {
                return message.channel.send("Annullato");
            } else {
                if(!`${guild_id_path}/sconti.txt`) {
                    fs.unlink(`${guild_id_path}/sconti.txt`, (err) => {
                        if (err) {
                          console.error(err);
                        }})
                }
                fs.writeFile(`${guild_id_path}/sconti.txt`, response, (err) => {
                    if (err) throw err;
                  });
                message.channel.send("Fatto!");
            }
        }).catch("Tempo scaduto")

};
