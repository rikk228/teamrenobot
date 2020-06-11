const discord = require("discord.js");

exports.run = async (bot, message, args, cmd) => {
    var i = 10;
    //let user = bot.users.cache.get(message.channel.topic);
    message.channel.send("Se l'utente è un abbonato, ma l'argomento del canale è vuoto NON PROSEGUIRE! Se invece è un abbonato e l'argomento del canale contiene una serie di numeri proseguire. Se non è un abbonato non proseguire");
    message.channel.send("Per proseguire digita 'si' ATTENZIONE: NON SARÀ POSSIBILE ANNULLARE! Se invece non è un abbonato digitare 'no'");
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 17000 })
        .then(async collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();

            if(response === "si" || response === "s" || response === "sì") {
                let msg = await  message.channel.send("Questa chat verrà eliminata tra: " + i);
                setTimeout(() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            setTimeout(() => {
                                setTimeout(() => {
                                    i = i - 1;
                                    msg.edit("Questa chat verrà eliminata tra: " + i);
                                    let member = message.guild.members.cache.get(message.channel.topic);
                                    member.roles.add("710488660373405726");
                                    message.channel.delete();
                                }, 1000);
                                i = i - 1;
                                msg.edit("Questa chat verrà eliminata tra: " + i);
                            }, 1000);
                            i = i - 1;
                            msg.edit("Questa chat verrà eliminata tra: " + i);
                        }, 1000);
                        i = i - 2;
                        msg.edit("Questa chat verrà eliminata tra: " + i);
                    }, 2000);
                    i = i - 5;
                    msg.edit("Questa chat verrà eliminata tra: " + i);
                }, 5000);
                
            }

            if(response === "no" || response === "n") {
                let msg = await  message.channel.send("Questa chat verrà eliminata tra: " + i);
                setTimeout(() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            setTimeout(() => {
                                setTimeout(() => {
                                    i = i - 1;
                                    msg.edit("Questa chat verrà eliminata tra: " + i);
                                    message.channel.delete();
                                }, 1000);
                                i = i - 1;
                                msg.edit("Questa chat verrà eliminata tra: " + i);
                            }, 1000);
                            i = i - 1;
                            msg.edit("Questa chat verrà eliminata tra: " + i);
                        }, 1000);
                        i = i - 2;
                        msg.edit("Questa chat verrà eliminata tra: " + i);
                    }, 2000);
                    i = i - 5;
                    msg.edit("Questa chat verrà eliminata tra: " + i);
                }, 5000);
            }
            if(response === "annulla") {
                return message.channel.send("Annullato");
            }

            }).catch("Tempo scaduto")
 };