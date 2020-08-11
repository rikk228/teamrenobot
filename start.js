const discord = require("discord.js");
const fs = require("fs");
//const dd = require("../../guild")

exports.run = async (bot, message, args) => {

    fs.mkdirSync(`./guild/${message.guild.id}`);

};