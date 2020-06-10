const discord = require("discord.js");

exports.run = async (bot, message, args, cmd) => {
    
    message.channel.send({embed: 
        {
        color: 15105570,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        description: "Specifica la sezione:",
        fields: [
            {
                name: "`settings`",
                value: "Ti permette di avere i tag in cui viene specificata la tua piattaforma i giochi che possiedi."
            },{
                name: "`misc`",
                value: "Cose random"
            },{
                name: "`mod`",
                value: "Comandi disponibili a chi è moderatore"
            },{
                name: "`infoabbonato`",
                value: "Info per chi è abbonato e non sa cosa quali sono i suo ''Privilegi'' / vuole il ruolo e/o vuole entrare sul telgram degli abbonati"
            },{
                name: "`abbonato`",
                value: "Sezione per abbonati"
            }
        ]
    }})
    
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 15000 })
    .then(collected => {    
        if (!collected.first()) return message.reply("Tempo scaduto, riprova");
        let response = collected.first().content.toLowerCase();

        switch (response) {

            case "settings":
                const settingsmodule = require("./setting.js");
                settingsmodule.run(bot, message, args);
            break;

            case "misc":
                const miscmodule = require("./misc.js");
                miscmodule.run(bot, message, args);
            break;

            case "mod":
                const modmodule = require("./mod.js");
                modmodule.run(bot, message, args, cmd);
            break;

            case "infoabbonato":
                const infoabbonatomodule = require("./infoabbonato.js");
                infoabbonatomodule.run(bot, message, args);
            break;
            
            case "abbonato":
                const abbonatomodule = require("./abbonato.js");
                abbonatomodule.run(bot, message, args, cmd);
            break;

        }

        if(response === 'Annulla') return message.reply("Annullato")}).catch("Tempo scaduto");

};
