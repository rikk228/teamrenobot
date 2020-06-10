const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("manca il link");
    liveytc = bot.channels.get('683326307647356950');
    liveytc.send(`<@&683247475665928237> Ragas reno è andato in modalità live su youtube andate a vederlo: ${args}`);

};