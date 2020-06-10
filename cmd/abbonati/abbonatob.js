const discord = require("discord.js");

exports.run = async (bot, message, contattoTelegram) => {

    message.channel.send("Dimmi il tuo nome su Twitch");
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 17000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let nomeTwitch = collected.first().content.toLowerCase();

            const abbonatoc = require("./abbonatoc.js");
            abbonatoc.run(bot, message, contattoTelegram, nomeTwitch);

            }).catch("Tempo scaduto")

};