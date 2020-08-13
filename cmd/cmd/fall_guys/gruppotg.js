const discord = require("discord.js");

exports.run = async (bot, message, args) => {

	let imgfallg = "https://cdn.discordapp.com/attachments/743474103134060544/743481876517224448/fall_guys.jfif";
	
    const embed = new discord.MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Gruppo di Fall Guys Italia')
	.setURL('https://t.me/fallguys_italia')
	.setAuthor("Fall Guys Italia", imgfallg, 'https://t.me/fallguys_italia');

	message.channel.send(embed);

};