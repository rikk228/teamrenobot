const discord = require("discord.js");

exports.run = async (bot, message, args, rGiver) => {

    rGiver("683245875023183993");
    rGiver("683245470784552971");
    rGiver("683247723855609891");
    message.channel.send("Dimmi la tua piattaforma di gioco, quelle disponibili sono: ``pc``, ``ps4``, ``xbox``. Se invece volevi solo verificarti dì ``fatto``");

    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 2, time: 17000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();
            if(response === "pc"){
                rGiver("683245422705508353");
                rGiver("683247475665928237");
                const addgamecmd = require("./addgame.js");
                addgamecmd.run(bot, message, rGiver);
            }
            if(response === "ps4"){
                rGiver("683245365679620155");
                rGiver("683247475665928237");
                const addgamecmd = require("./addgame.js");
                addgamecmd.run(bot, message, rGiver);
            }
            if(response === "xbox"){
                rGiver("683245553525456916");
                rGiver("683247475665928237");
                const addgamecmd = require("./addgame.js");
                addgamecmd.run(bot, message, rGiver);
            }
            if(response === 'fatto') return message.channel.send("Registrazione completata, se in futuro vorrei cambiare qualcosa vai nei settings del tuo profilo cambiale (.help > settings)")    
            }).catch("Tempo scaduto")
};