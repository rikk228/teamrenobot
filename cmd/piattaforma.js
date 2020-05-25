const discord = require("discord.js");

exports.run = async (bot, message, args, rGiver, rRemove) => {

    message.channel.send("Dimma la tua piattaforma di gioco principale: ``pc, ps4, xbox``.");
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 2, time: 17000 })
        .then(collected => {    
            if (!collected.first()) return message.reply("Tempo scaduto, riprova")       
            let response = collected.first().content.toLowerCase();
            if(response === "pc"){
                if((message.member.roles.some(role => role.name === 'pc'))) {
                    message.channel.send("Hai già quella piattaforma!");
                } else {
                    rRemove("683245365679620155");
                    rRemove("683245553525456916");
                    rGiver("683245422705508353");
                    rGiver("683247475665928237");
                    message.channel.send("Piattaforma cambiata con successo!");
                }
            }
            if(response === "ps4"){
                if((message.member.roles.some(role => role.name === 'ps4'))) {
                    message.channel.send("Hai già quella piattaforma!");
                } else {
                    rRemove("683245422705508353");
                    rRemove("683245553525456916");
                    rGiver("683245365679620155");
                    rGiver("683247475665928237");
                    message.channel.send("Piattaforma cambiata con successo!");
                }
            }
            if(response === "xbox"){
                if((message.member.roles.some(role => role.name === 'xbox'))) {
                    message.channel.send("Hai già quella piattaforma!");
                } else {
                    rRemove("683245422705508353");
                    rRemove("683245365679620155");
                    rGiver("683245553525456916");
                    rGiver("683247475665928237");
                    message.channel.send("Piattaforma cambiata con successo!");
                }
            }    
            }).catch("Tempo scaduto")
    function rGiver(id) {
        message.member.roles.add(id);
    }
    function rRemove(id) {
        message.member.roles.remove(id);
    }
};