const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: true});
const botconfig = require("./botconfig.json");


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(".help", {type: "PLAYING"});
  });
  
bot.on("message", async (message) => {

    if(message.author.bot) 
    return;
    if(message.channel.type === "dm")
    return;
  


    let prefix       = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd          = messageArray[0];
    let args         = messageArray.slice(1); 
    let usern        = message.member;
    let member       = message.member;

    console.log(`${usern}: ${message}`);
    
    //comando help
    
    if(cmd === `${prefix}help`){     
      const helpcmd = require("./cmd/help.js");
      helpcmd.run(bot, message, args);
    }

    if(cmd === `${prefix}ping`) {
        const pingcmd = require("./cmd/ping.js");
        pingcmd.run(bot, message);
    }
 
    //comando ".register"
    if(cmd === `${prefix}register`) {
        const registercmd = require("./cmd/register.js");
        registercmd.run(bot, message, args);
    }

    //comando giochi
    if(cmd === `${prefix}addgame`) {
        const addgamecmd = require("./cmd/addgame.js");
        addgamecmd.run(bot, message);
    }

    //comando "live?"
    if(cmd === `${prefix}liveyt`) {
        if(message.member.roles.some(role => role.name === 'Moderatore')) {
            message.delete(1);
            if(!args[0]) return message.channel.send("manca il link");
            liveytc = bot.channels.get('683326307647356950');
            liveytc.send(`<@&683247475665928237> Ragas reno è andato in modalità live su youtube andate a vederlo: ${args}`);
        } else {
            message.delete(1);
            message.channel.send("❌Accesso Negato❌");
        }
    }
    
    if(cmd === `${prefix}guidaonline`) {
        const guidaonlinecmd = require("./cmd/guidaonline.js");
        guidaonlinecmd.run(bot, message);
    }

    if(cmd === `${prefix}removegame`) {
        const removegamecmd = require("./cmd/removegame.js");
        removegamecmd.run(bot, message);
    }

    if(cmd === `${prefix}canalevalorant`){
        message.channel.send("https://www.youtube.com/channel/UCINA0WVoL07Gq21sSAFSLrg")
    }
    
    //if(cmd === `${prefix}abbonato`){
    //    const abbonatocmd = require("./cmd/abbonato.js");
    //    abbonatocmd.run(bot, message, args);
    //}
 
});  

bot.login(botconfig.token);