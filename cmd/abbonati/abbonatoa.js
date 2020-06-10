const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send("Qual è il tuo @ di Telegram?");

    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 17000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let contattoTelegram = collected.first().content.toLowerCase();
            
            const abbonatob = require("./abbonatob.js");
            abbonatob.run(bot, message, contattoTelegram);
                
            }).catch("Tempo scaduto")


};