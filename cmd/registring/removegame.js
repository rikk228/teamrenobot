const discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send("Ovviamente dimmi un ruolo che hai perchè altrimenti non posso rimuoverlo..");
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 60000 })
    .then(collected => {    
        if (!collected.first()) return message.reply("Tempo scaduto, riprova");
        let response = collected.first().content.toLowerCase();
        switch (response) {
            case "fortnite":
                message.member.roles.remove("683746737571364877");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "minecraft":
                message.member.roles.remove("683246172294742041");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "apex legends":
                message.member.roles.remove("683245924474159123");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "gta v":
                message.member.roles.remove("683245981365436416");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "read dead redemption 2":
                message.member.roles.remove("683603827424755716");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "rainbow six siege":
                message.member.roles.remove("683746651621294338");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "league of legends":
                message.member.roles.remove("685529511642923022");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "fivem":
                message.member.roles.remove("685827604250492938");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "warzone":
                message.member.roles.remove("688320351398395960");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "spellbreak":
                message.member.roles.remove("686969700508499990");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "valorant":
                message.member.roles.remove("699899893908635700")
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "cs:go":
                message.member.roles.remove("685529566265212959");
                message.channel.send("Fatto! Se hai altri giochi da rimuovere fai ``.removegame``");
                break;
            case "fatto":
                message.channel.send("Bene registrazione fatta, se in futuro o hai sbagliato e vuoi aggiungere, qualche gioco scrivi ``.addgame``");
                break;
        }
        if(response === 'Annulla') return message.reply("Annullato")}).catch("Tempo scaduto");
};