const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: false});
const botconfig = require("./botconfig.json");
const fs = require("fs");
let currentdate = new Date();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(".help", {type: "PLAYING"});
  });
  
bot.on("message", async (message) => {

    if(message.author.bot) 
    return;
    if(message.channel.type === "dm")
    return;

    const logs = `${currentdate}: ${message.author} o ${message.author.username}, ${message.channel.id}: ${message} \n`;
    fs.appendFile(`log.txt`, logs, (err) => {
      if (err) {
        return console.error(err)
      }
    });

    let prefix       = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd          = messageArray[0];
    let args         = messageArray.slice(1); 
    let usern        = message.member;

    //console.log(`${usern}: ${cmd}`);
    

    const anticheat = require("./cmd/mod/anticheat.js");
    function anticheatf() {
        anticheat.run(bot, message, args, cmd);
    }

    //comando help
    if(cmd === `${prefix}help`){     
      const helpcmd = require("./cmd/help/help.js");
      helpcmd.run(bot, message, args, cmd);
    }

    if(cmd === `${prefix}ping`) {
        const pingcmd = require("./cmd/ping.js");
        pingcmd.run(bot, message);
    }

    if(cmd === `${prefix}spam`) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(`Ricordo che per chi non è ancora verificato basta fare ".register" e poi seguire quello che vi dirò. Se avete domande sentitevi liberi di farle in <#686496252682174488>, prima di chiedere aiuto controllate <#712594302127308822> che magari trovate la risposta. @everyone`);
            message.delete({timeout: 300});
        } else {
            anticheatf();
        }
    }

    if(cmd === `${prefix}sconti`) {
        const scontigta = require("./cmd/gta/sconti.js");
        scontigta.run(bot, message, args);
    }

    if(cmd === `${prefix}set`) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            const setcmd = require("./cmd/set.js");
            setcmd.run(bot, message, args);
        } else {
            anticheatf();
        }
    }

    if(cmd === `${prefix}unset`) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            const unsetcmd = require("./cmd/unset.js");
            unsetcmd.run(bot, message, args);
        } else {
            anticheatf();
        }
    }
 
    //comando ".register"
    if(cmd === `${prefix}register`) {
        if(message.member.roles.cache.some(r => r.name === "Verificato")) {
            message.channel.send("Ti sei già registrato, non è possibile registrarsi una seconda volta");
        } else {
            const registercmd = require("./cmd/registring/register.js");
            registercmd.run(bot, message, args);
        }
    }

    //comando giochi
    if(cmd === `${prefix}addgame`) {
        if(message.member.roles.cache.some(r => r.name === "Verificato")) {
            const addgamecmd = require("./cmd/registring/addgame.js");
            addgamecmd.run(bot, message);
        } else {
            message.channel.send("Devi registrarti prima ``.register``");
        }
    }

    //comando "live?"
    if(cmd === `${prefix}liveyt`) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
        const liveytcmd = require("./cmd/mod/liveyt.js");
        liveytcmd.run(bot, message, args);
        } else {
            anticheatf();
        }
    }
    
    if(cmd === `${prefix}sonoabbonato`){
        const sonoAbbonatocmd = require("./cmd/abbonati/abbonatoa.js");
        sonoAbbonatocmd.run(bot, message);
    }

    if(cmd === `${prefix}guidaonline`) {
        const guidaonlinecmd = require("./cmd/guidaonline.js");
        guidaonlinecmd.run(bot, message);
    }

    if(cmd === `${prefix}risolto`) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            const risoltocmd = require("./cmd/mod/risolto.js");
            risoltocmd.run(bot, message, args, cmd);
        } else {
            anticheatf();
        }

    }

    if(cmd === `${prefix}removegame`) {
        if(message.member.roles.cache.some(r => r.name === "Verificato")) {
            const removegamecmd = require("./cmd/registring/removegame.js");
            removegamecmd.run(bot, message);
        } else {
            message.channel.send("Devi registrarti prima ``.register``");
        }
    }
    if(cmd === `${prefix}piattaforma`) {
        if(message.member.roles.cache.some(r => r.name === "Verificato")) {
            const piattaformacmd = require("./cmd/registring/piattaforma.js");
            piattaformacmd.run(bot, message);
        } else {
            message.channel.send("Devi registrarti prima ``.register``");
        }
        
    }

    if(cmd === `${prefix}canalevalorant`){
        message.channel.send("https://www.youtube.com/channel/UCINA0WVoL07Gq21sSAFSLrg");
    }
    
    if(cmd === `${prefix}abbonato`){
        const abbonatocmd = require("./cmd/abbonati/abbonato.js");
        abbonatocmd.run(bot, message, args);
    }
    
    if(cmd === `${prefix}abbonatod`){
        const abbonatodcmd = require("./cmd/abbonatod.js");
        abbonatodcmd.run(bot, message, args);
    }

    
     if(cmd === `${prefix}test`){

    const gtave = bot.emojis.cache.get("\:GTAV:");
    message.channel.send({embed: 
             {
             color: 15105570,
             author: {
                 name: bot.user.username,
                 icon_url: bot.user.avatarURL
             },
             description: "",
             fields: [
                 {
                     name: "Aggiungi giochi al profilo",
                     value: "test"
                 },
             ]
         }}).then(() => message.react('gtave'))
    
     message.react('👍').then(() => message.react('👎'));

     const filter = (reaction, user) => {
         return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
     };
    
     message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
         .then(collected => {
             const reaction = collected.first();
    
             if (reaction.emoji.name === '👍') {
                 message.reply('you reacted with a thumbs up.');
             } else {
                 message.reply('you reacted with a thumbs down.');
             }
         })
        .catch(collected => {
             message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
         });
    
    }

});  

bot.login(botconfig.token);