const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        description: "misc:",
        fields: [
            {
                name: "`.ping`",
                value: "Pong🏓"
            },{
                name: "`.guidaonline`",
                value: "Ecco dove puoi trovare tutto quello che ti interessa di gtav online"
            },{
                name: "`.canalevalorant`",
                value: "Canale di guide per valorant di Reno e del suo mitico compagno di avventure TheAratoRR."
            }
        ]
    }})

};