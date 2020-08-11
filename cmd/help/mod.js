const discord = require("discord.js");

exports.run = async (bot, message, args, cmd) => {

    if(message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send({embed: 
            {
            color: 15105570,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
            },
            description: "Moderatori:",
            fields: [ 
                {
                    name: "`.liveyt [link]`",
                    value: "Quando reno va in live e non parte la notifica fai il comando e metti il link dopo il comando"
                },{
                    name: "`.spam`",
                    value: "Da inviare di tanto in tanto nella stanza richiesta ruoli o dove ci si verifica per dire cosa bisogna fare per aver accesso al server"
                },{
                    name: "`.risolto`",
                    value: "Serve quando la richiesta da abbonato è chiarita, 3 opzioni dopo aver fatto il comando: 'si' | 'no' | 'annulla'"
                },{
                    name: "`.set`",
                    value: "Imposta qualche comando come .soldi"
                },{
                    name: "`.unset`",
                    value: "Imposta qualche comando come .soldi"
                },{
                    name: "`.start`",
                    value: "Ti permette di sbloccare i comandi: `.set`, `.unset`"
                }
            ]
        }})
    } else {
        message.channel.send("❌Accesso negato❌")
    }

};