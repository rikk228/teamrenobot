const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("manca la @ di telegram");
    abbonatoc = bot.channels.get('710790483093356544');
    abbonatoc.send(`${message.author} chiede il ruolo abbonato, il suo contatto telgram è questo: ${args}`).then(function(message) {
    message.react('👌').then(() => message.react('👎'));

    const filter = (reaction, user) => {
        return reaction.emoji.name === '👌' && user.id === message.author.id;
    };
    
    message.awaitReactions(filter, { max: 4, time: 60000, errors: ['time'] })
        .then(collected => console.log(collected.size))
        .catch(collected => {
            console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        });
    })
    //console.log(reactions);
};