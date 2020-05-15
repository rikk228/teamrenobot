const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        description: "Abbonato",
        fields: [
            {
                name: "Sei un abbonato?",
                value: "Se la risposta è si contatta:  e mandagli una foto del tuo abbonamento ovviamente non farti paura di nasconere i dati sensibili"
            }
        ]
    }})

};