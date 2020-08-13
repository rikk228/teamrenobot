const discord = require("discord.js");

exports.run = async (bot, message, args, cmd) => {

    if(message.member.roles.cache.some(r => r.name === "Abbonato")) {

        message.channel.send({embed: 
            {
            color: 15105570,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
            },
            description: "Abbonati",
            fields: [
                {
                    name: "Privilegi",
                    value: "Vuoi sapere cosa puoi fare da abbonato?"
                },{
                    name: "Comandi",
                    value: "Provami..."
                }
            ]
        }})

    } else {
        const anticheat = require("../mod/anticheat.js");
        anticheat.run(bot, message, args, cmd);
    }

};