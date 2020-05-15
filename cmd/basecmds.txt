const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send({embed: 
                    {
                    color: 15105570,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    description: "",
                    fields: [
                        {
                            name: "`.`",
                            value: ""
                        },
                    ]
                }})

};