const discord = require("discord.js");
let currentdate = new Date();

exports.run = async (bot, message, fs, args) => {

    let filename = message.author.id;

    
    const userdata = "True | " + cash;
    fs.appendFile(`./cmd/userdata/${filename}.json`, usrdata, (err) => {
        if (err) {
              return console.error(err)
        }
    });

};