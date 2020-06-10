const discord = require("discord.js");

exports.run = async (bot, message, contattoTelegram, nomeTwitch) => {
    
    let cName = `richiesta-${message.author.username}-${message.author.discriminator}`

    message.channel.send({embed: 
        {
            color: 15105570,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
            },
            description: "Scheda di riepilogo",
            fields: [{
                name: "Telegram",
                value: `@${contattoTelegram}`
                },{
                    name: "Nome twitch:",
                    value: `${nomeTwitch}`
                },{
                    name: "Link twitch:",
                    value: `https://twitch.tv/${nomeTwitch}/`
                }
            ]
    }})
    message.channel.send("Vuoi continuare?")
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 17000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();

            if(response === "no") {
                return message.channel.send("Richiesta Annullata");
            }

            if(response === "si" || response === "sì" || response === "s") { 

                let tryChannel = message.guild.channels.cache.find(ch => ch.name == cName);
                if(!tryChannel) {
                    let newChannel = message.guild.channels.create(cName, {
                        type: 'text',
                        topic: `${message.author.id}`,
                        permissionOverwrites: [
                            {
                                id: message.guild.id,
                                deny: ['VIEW_CHANNEL'],
                            },
                            {
                                id: message.author.id,
                                allow: ['VIEW_CHANNEL'],
                            },
                        ],
                    }).then(nC => {
                        nC.send({embed: 
                            {
                                color: 15105570,
                                author: {
                                    name: bot.user.username,
                                    icon_url: bot.user.avatarURL
                                },
                                description: "Richista per il ruolo abbonato | Informazioni",
                                fields: [{
                                    name: "Contatto telegram:",
                                    value: `@${contattoTelegram}`
                                    },{
                                        name: "Nome twitch:",
                                        value: `${nomeTwitch}`
                                    },{
                                        name: "Link twitch:",
                                        value: `https://twitch.tv/${nomeTwitch}/`
                                    }
                                ]
                        }})
                        message.channel.send("La richiesta è stata fatta, puoi trovare la stanza in <#" + nC.id + ">");
                    })
                } else {
                    let channel = message.guild.channels.cache.find(ch => ch.name == cName);
                    return message.channel.send("Non puoi creare altre richieste, puoi trovare la tua richiesta in: <#" + channel + ">");
                }
                console.log("cName ", cName);

        }
            }).catch("Tempo scaduto")

};