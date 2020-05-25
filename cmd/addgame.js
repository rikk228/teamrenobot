const discord = require("discord.js");

exports.run = async (bot, message) => {

    message.channel.send("Se hai un gioco tra questa lista dimmelo (solo uno): ``fortnite``, ``minecraft``, ``apex legends``, ``gta v``, ``read dead redemption 2``, ``rainbow six siege``, ``league of legend``, ``fivem``, ``warzone``, ``valorant``, ``cs:go``");
    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, { max: 1, time: 60000 })
    .then(collected => {    
        if (!collected.first()) return message.reply("Tempo scaduto, riprova");
        let response = collected.first().content.toLowerCase();

        switch (response) {
            case "fortnite":
                rGiver("683746737571364877");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "minecraft":
                rGiver("683246172294742041");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "apex legends":
                rGiver("683245924474159123");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "gta v":
                rGiver("683245981365436416");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "read dead redemption 2":
                rGiver("683603827424755716");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "rainbow six siege":
                rGiver("683746651621294338");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "league of legends":
                rGiver("685529511642923022");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "fivem":
                rGiver("685827604250492938");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "warzone":
                rGiver("688320351398395960");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "spellbreak":
                rGiver("686969700508499990");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "valorant":
                rGiver("699899893908635700")
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "cs:go":
                rGiver("685529566265212959");
                message.channel.send("Fatto! Gioco aggiunto al tuo profilo, se vuoi aggiungere qualche altro gioco digita ``.addgame``. Se per sbaglio hai aggiunto un gioco che non hai fai ``.removegame``");
                break;
            case "fatto":
                message.channel.send("Bene registrazione fatta, se in futuro o hai sbagliato e vuoi aggiungere, qualche gioco scrivi ``.addgame``");
                break;
        }

        if(response === 'Annulla') return message.reply("Annullato")}).catch("Tempo scaduto");
    function rGiver(id) {
        message.member.roles.add(id);
    }
    function rRemove(id) {
        message.member.roles.remove(id);
    }
};
