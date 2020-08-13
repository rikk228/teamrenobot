const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: false});
const botconfig = require("./botconfig.json");
const fs = require("fs");
const database = "../database";
const prefix = ".";
let currentdate = new Date();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(".help", {type: "PLAYING"});
  });
  
bot.on("message", async (message) => {

    if(message.author.bot) 
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

    /*if(cmd === `${prefix}connect`){ 
        console.log(args)
        const connectcmd = require("./connect.js");
        connectcmd.run(bot, message, args);
    }*/
    
    //comando help
    if(message.guild.id === "211799721553952768") {
        if(cmd === `${prefix}spam`) {
            if(message.channel.type === "dm")
            return; 
            if(message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send(`Ricordo che per chi non è ancora verificato basta fare ".register" e poi seguire quello che vi dirò. Se avete domande sentitevi liberi di farle in <#686496252682174488>, prima di chiedere aiuto controllate <#712594302127308822> che magari trovate la risposta. @everyone`);
                message.delete({timeout: 300});
            } else {
                message.channel.send("❌Accesso negato❌")
            }
        }
        //comando ".register"
        if(cmd === `${prefix}register`) {
            if(message.channel.type === "dm")
            return; 
            if(message.member.roles.cache.some(r => r.name === "Verificato")) {
                message.channel.send("Ti sei già registrato, non è possibile registrarsi una seconda volta");
            } else {
                const registercmd = require("./cmd/registring/register.js");
                registercmd.run(bot, message, args);
            }
        }

        //comando giochi
        if(cmd === `${prefix}addgame`) {
            if(message.channel.type === "dm")
            return; 
            if(message.member.roles.cache.some(r => r.name === "Verificato")) {
                const addgamecmd = require("./cmd/registring/addgame.js");
                addgamecmd.run(bot, message);
            } else {
                message.channel.send("Devi registrarti prima ``.register``");
            }
        }

        //comando "live?"
        if(cmd === `${prefix}liveyt`) {
            if(message.channel.type === "dm")
            return; 
            if(message.member.hasPermission("ADMINISTRATOR")) {
            const liveytcmd = require("./cmd/mod/liveyt.js");
            liveytcmd.run(bot, message, args);
            } else {
                message.channel.send("❌Accesso negato❌")
            }
        }
        
        if(cmd === `${prefix}sonoabbonato`){
            if(message.channel.type === "dm")
            return; 
            const sonoAbbonatocmd = require("./cmd/abbonati/abbonatoa.js");
            sonoAbbonatocmd.run(bot, message);
        }
        if(cmd === `${prefix}risolto`) {
            if(message.channel.type === "dm")
            return; 
            if(message.member.hasPermission("ADMINISTRATOR")) {
                const risoltocmd = require("./cmd/mod/risolto.js");
                risoltocmd.run(bot, message, args, cmd);
            } else {
                message.channel.send("❌Accesso negato❌")
            }
    
        }
    
        if(cmd === `${prefix}removegame`) {
            if(message.channel.type === "dm")
            return; 
            if(message.member.roles.cache.some(r => r.name === "Verificato")) {
                const removegamecmd = require("./cmd/registring/removegame.js");
                removegamecmd.run(bot, message);
            } else {
                message.channel.send("Devi registrarti prima ``.register``");
            }
        }
        if(cmd === `${prefix}piattaforma`) {
            if(message.channel.type === "dm")
            return; 
            if(message.member.roles.cache.some(r => r.name === "Verificato")) {
                const piattaformacmd = require("./cmd/registring/piattaforma.js");
                piattaformacmd.run(bot, message);
            } else {
                message.channel.send("Devi registrarti prima ``.register``");
            }
            
        }
    }
    if(cmd === `${prefix}help`){ 
        if(message.channel.type === "dm")
        return; 
        const helpcmd = require("./cmd/help/help.js");
        helpcmd.run(bot, message, args, cmd);
    }

    if(cmd === `${prefix}ping`) {
        if(message.channel.type === "dm")
        return; 
        const pingcmd = require("./cmd/ping.js");
        pingcmd.run(bot, message);
    }

    if(cmd === `${prefix}sconti`) {
        if(message.channel.type === "dm")
        return; 
        const scontigta = require("./cmd/gta/sconti.js");
        scontigta.run(bot, message, args);
    }

    if(cmd === `${prefix}gruppofallguys`) {
        if(message.channel.type === "dm")
        return; 
        const gruppofallguys = require("./cmd/fall_guys/gruppotg.js");
        gruppofallguys.run(bot, message, args);
    }

    if(cmd === `${prefix}notiziefallguys`) {
        if(message.channel.type === "dm")
        return; 
        const notiziegruppofallguys = require("./cmd/fall_guys/notizietg.js");
        notiziegruppofallguys.run(bot, message, args);
    }

    if(cmd === `${prefix}set`) {
        if(message.channel.type === "dm")
        return; 
            const setcmd = require("./cmd/set.js");
            setcmd.run(bot, message, args);
    }

    if(cmd === `${prefix}unset`) {
        if(message.channel.type === "dm")
        return; 
            const unsetcmd = require("./cmd/unset.js");
            unsetcmd.run(bot, message, args);
    }

    if(cmd === `${prefix}guidaonline`) {
        if(message.channel.type === "dm")
        return; 
        const guidaonlinecmd = require("./cmd/guidaonline.js");
        guidaonlinecmd.run(bot, message);
    }

    if(cmd === `${prefix}canalevalorant`){
        if(message.channel.type === "dm")
        return; 
        message.channel.send("https://www.youtube.com/channel/UCINA0WVoL07Gq21sSAFSLrg");
    }
    
    if(cmd === `${prefix}abbonato`){
        if(message.channel.type === "dm")
        return; 
        const abbonatocmd = require("./cmd/abbonati/abbonato.js");
        abbonatocmd.run(bot, message, args);
    }
    if(cmd === `${prefix}start`){
        const startcmd = require("./start.js");
        startcmd.run(bot, message, args);
    }
});  

bot.login(botconfig.token);