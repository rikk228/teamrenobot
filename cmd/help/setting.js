const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        description: "Settings:",
        fields: [
            {
                name: "`.register`",
                value: "Con questo comandi ti registrerai"
            },{
                name: "`.addgame`",
                value: "Aggiungi al tuo profilo su discord i giochi che hai"
            },{
                name: "`.removegame`",
                value: "Rimuovi dal tuo profilo discord i giochi che non hai disintallato"
            },{
                name: "`.piattaforma`",
                value: "Non giochi più dalla tua console preferita o vuoi cambiare fai pure `.piattaforma`, ricordati che però ne potrai avere sempre e solo una"
            }
        ]
    }})

};