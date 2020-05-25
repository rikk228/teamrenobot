const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: true});
const botconfig = require("./botconfig.json");
const fs = require("fs");
var currentdate = new Date();

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
    
    //comando help
    
    if(cmd === `${prefix}help`){     
      const helpcmd = require("./cmd/help.js");
      helpcmd.run(bot, message, args);
    }

    if(cmd === `${prefix}ping`) {
        const pingcmd = require("./cmd/ping.js");
        pingcmd.run(bot, message);
    }

    if(cmd === `${prefix}spam`) {
        
    }
 
    //comando ".register"
    if(cmd === `${prefix}register`) {
        if(message.member.hasPermission("CREATE_INSTANT_INVITE")) {
            message.channel.send("Ti sei già registrato, non è possibile registrarsi una seconda volta");
        } else {
            const registercmd = require("./cmd/register.js");
            registercmd.run(bot, message, args);
        }
    }

    //comando giochi
    if(cmd === `${prefix}addgame`) {
        if(message.member.hasPermission("CREATE_INSTANT_INVITE")) {
            const addgamecmd = require("./cmd/addgame.js");
            addgamecmd.run(bot, message);
        } else {
            message.channel.send("Devi registrarti prima ``.register``");
        }
    }

    //comando "live?"
    if(cmd === `${prefix}liveyt`) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            if(!args[0]) return message.channel.send("manca il link");
            liveytc = bot.channels.get('683326307647356950');
            liveytc.send(`<@&683247475665928237> Ragas reno è andato in modalità live su youtube andate a vederlo: ${args}`);
        } else {
            message.channel.send("❌Accesso Negato❌");
        }
    }
    
    if(cmd === `${prefix}guidaonline`) {
        const guidaonlinecmd = require("./cmd/guidaonline.js");
        guidaonlinecmd.run(bot, message);
    }

    if(cmd === `${prefix}removegame`) {
        if(message.member.hasPermission("CREATE_INSTANT_INVITE")) {
            const removegamecmd = require("./cmd/removegame.js");
            removegamecmd.run(bot, message);
        } else {
            message.channel.send("Devi registrarti prima ``.register``");
        }
    }
    if(cmd === `${prefix}piattaforma`) {
        const piattaformacmd = require("./cmd/piattaforma.js");
        piattaformacmd.run(bot, message);
    }

    if(cmd === `${prefix}canalevalorant`){
        message.channel.send("https://www.youtube.com/channel/UCINA0WVoL07Gq21sSAFSLrg");
    }
    
    if(cmd === `${prefix}abbonato`){
        const abbonatocmd = require("./cmd/abbonato.js");
        abbonatocmd.run(bot, message, args);
    }

    if(cmd === `${prefix}abbonatod`){
        const abbonatodcmd = require("./cmd/abbonatod.js");
        abbonatodcmd.run(bot, message, args);
    }
    // if(cmd === `${prefix}test`){

    //     message.channel.send({embed: 
    //         {
    //         color: 15105570,
    //         author: {
    //             name: bot.user.username,
    //             icon_url: bot.user.avatarURL
    //         },
    //         description: "",
    //         fields: [
    //             {
    //                 name: "Aggiungi giochi al profilo",
    //                 value: "test"
    //             },
    //         ]
    //     }}).then(() => message.react('711973188287987734'))
    
    // //const gtave = message.guild.emojis.cache.find(emoji => emoji.name === 'GTA5');
    // message.react('👍').then(() => message.react('👎'));

    // const filter = (reaction, user) => {
    //     return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    // };
    
    // message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    //     .then(collected => {
    //         const reaction = collected.first();
    
    //         if (reaction.emoji.name === '👍') {
    //             message.reply('you reacted with a thumbs up.');
    //         } else {
    //             message.reply('you reacted with a thumbs down.');
    //         }
    //     })
    //     .catch(collected => {
    //         message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
    //     });
    
    // }

});  

bot.login(botconfig.token);