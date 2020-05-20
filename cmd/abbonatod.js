const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("manca la @ di telegram");
    abbonatoc = bot.channels.get('710790483093356544');
    abbonatoc.send(`${message.author} chiede il ruolo abbonato, il suo contatto telgram è questo: ${args}`).then(function(message) {

    })
    message.react('👍').then(() => message.react('👎'));  

    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) || user.id === message.author.id;
    };
    
    message.awaitReactions(filter, { max: 1, time: 14400, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '👍') {
                message.reply('you reacted with a thumbs up.');
            } else {
                message.reply('you reacted with a thumbs down.');
            }
        })
        .catch(collected => {
            message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
        });

};