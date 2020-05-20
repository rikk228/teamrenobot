const discord = require("discord.js");

exports.run = async (bot, message, args) => {
    
    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        description: "Specifica la sezione:",
        fields: [
            {
                name: "`settings`",
                value: "Ti permette di avere i tag in cui viene specificata la tua piattaforma i giochi che possiedi."
            },
            {
                name: "`misc`",
                value: "Cose random"
            },
            {
                name: "`mod`",
                value: "Comandi disponibili a chi è moderatore"
            }
        ]
    }})
    
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 15000 })
    .then(collected => {    
        if (!collected.first()) return message.reply("Tempo scaduto, riprova");
        let response = collected.first().content.toLowerCase();

        switch (response) {
            case "settings":
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
                        },
                        {
                            name: "`.addgame`",
                            value: "Aggiungi al tuo profilo su discord i giochi che hai"
                        },
                        {
                            name: "`.removegame`",
                            value: "Rimuovi dal tuo profilo discord i giochi che non hai disintallato"
                        }
                    ]
                }})
            break;

            case "misc":
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
                        },
                        {
                            name: "`.guidaonline`",
                            value: "Ecco dove puoi trovare tutto quello che ti interessa di gtav online"
                        },
                        {
                            name: "`.canalevalorant`",
                            value: "Canale di guide per valorant di Reno e del suo mitico compagno di avventure TheAratoRR."
                        },
                    ]
                }})
            break;

            case "mod":
                if(message.member.roles.some(role => role.name === 'Moderatore')) {
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
                            }
                        ]
                    }})
                } else {
                    message.delete(1);
                    message.channel.send("❌Accesso Negato❌");
                }
            break;
            

        }

        if(response === 'Annulla') return message.reply("Annullato")}).catch("Tempo scaduto");

};
