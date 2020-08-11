const discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

  const guild_id_path = `./guild/${message.guild.id}`;

    fs.readFile(`${guild_id_path}/sconti.txt`, 'utf8', (err, data) => {
        if(data === undefined) {
          return message.channel.send("Chiedi a moderatori di mettere gli sconti: `.set > sconti`")
        }
        message.channel.send(`${data}`);
      });
};