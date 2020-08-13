const discord = require("discord.js");

exports.run = async (bot, message, args) => {
    
    const msg = await message.channel.send("MMM....");

    msg.edit(`Il tuo ping è ${Math.floor(msg.createdAt - message.createdAt)}`);

};