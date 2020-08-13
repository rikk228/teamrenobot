const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        description: "**Info**",
        fields: [
            {
                name: "Alcuni comandi non funzionano come mai?",
                value: "La risposta è semplice, alcuni comandi per via di alcune restizioni di discord sono disponibili solamente sul server ufficiale di Reno"
            },{
                name: "Discord ufficiale:",
                value: "https://discord.gg/DyJGFZS"
            },{
                name: "Creatore del bot",
                value: "rikk228#5044 id: (409428160975994890)"
            },{
                name: "Versione bot:",
                value: "1.0.0"
            }
        ]
    }})

};

    