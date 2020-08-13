const discord = require("discord.js");

exports.run = async (bot, message, args) => {


    message.channel.send("Dimmi la tua piattaforma di gioco (***SOLO UNA***), quelle disponibili sono: ``pc``, ``ps4``, ``xbox``. Se invece volevi solo verificarti dì ``fatto``");

    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 17000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();
            if(response === "pc"){
                message.member.roles.add("683245422705508353");
                message.member.roles.add("683247475665928237");
                message.member.roles.add("683245875023183993");
                message.member.roles.add("683245470784552971");
                message.member.roles.add("683247723855609891");
                const addgamecmd = require("./addgame.js");
                addgamecmd.run(bot, message, message.member.roles.add);
            }
            if(response === "ps4"){
                message.member.roles.add("683245365679620155");
                message.member.roles.add("683247475665928237");
                message.member.roles.add("683245875023183993");
                message.member.roles.add("683245470784552971");
                message.member.roles.add("683247723855609891");
                const addgamecmd = require("./addgame.js");
                addgamecmd.run(bot, message, message.member.roles.add);
            }
            if(response === "xbox"){
                message.member.roles.add("683245553525456916");
                message.member.roles.add("683247475665928237");
                message.member.roles.add("683245875023183993");
                message.member.roles.add("683245470784552971");
                message.member.roles.add("683247723855609891");
                const addgamecmd = require("./addgame.js");
                addgamecmd.run(bot, message, message.member.roles.add);
            }
            if(response === 'fatto') {
                message.member.roles.add("683245875023183993");
                message.member.roles.add("683245470784552971");
                message.member.roles.add("683247723855609891");
                message.member.roles.add("683247475665928237");
            return message.channel.send("Registrazione completata, se in un secondo momento vorrai aggiungere una piattaforma `.piattaforma`, se invece vuoi aggiungere qualche gioco fai `.addgame`")    

            }
        }).catch("Tempo scaduto")
};