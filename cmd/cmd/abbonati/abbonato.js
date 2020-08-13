const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        fields: [
            {
                name: "Sei un abbonato?",
                value: "Se la risposta è si contatta: @CristinaSumma e mandagli una foto del tuo abbonamento (Per il gruppo telegram)."
            },{
                name: "Sei nel gruppo telegram ma non hai il ruolo su discord?",
                value: "Fai '.sonoabbonato' e segui le istruzioni"
            }
        ]
    }})

};