const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        description: "Specifica la sezione:",
        fields: [
            {
                name: "`sconti`",
                value: "Imposta gli sconti settimanali accessibili con .sconti"
            }
        ]
    }})

    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 17000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();

            if(response === "sconti") {
                const sconticmd = require("./gta/setsconti.js");
                sconticmd.run(bot, message, args);
            }
            if(response === "annulla") {
                message.channel.send("Annullato");
            }

        }).catch("Tempo scaduto")

};