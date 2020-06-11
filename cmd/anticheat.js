const discord = require("discord.js");

exports.run = async (bot, message, args, cmd) => {

    message.channel.send("❌Accesso Negato❌");
    const channel = message.member.guild.channels.cache.find(ch => ch.name === "try-exploit");
    channel.send({embed: 
        {
            color: 15105570,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
            },
            description: "ATTENZIONE!",
            fields: [{
                name: "L'utente",
                value: `<@${message.author.id}> ha provato ad usare un comando riservato: ${cmd}`
                }
            ]
    }})

};