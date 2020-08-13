const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        description: "Abbonato:",
        fields: [
            {
                name: "`.abbonato`",
                value: "Vuoi qualche informazione in più per quanto riguarda i privilegi di essere abbonato."
            },{
                name: "`.sonoabbonato`",
                value: "Questo comando ti permetterà di inviare una richiesta hai moderatori per aver il ruolo da abbonato. Ricordati di collegare il tuo account twitch a discord."
            }
        ]
    }})

};