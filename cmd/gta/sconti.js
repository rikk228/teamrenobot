const discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

    fs.readFile('./cmd/gta/sconti.txt', 'utf8', (err, data) => {
        if (err) throw err;
        message.channel.send(`${data}`);
      });
};