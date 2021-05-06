module.exports = {
    name: 'help',
    description: "help with commands and things for zune",
    execute(clinet, message, args, Discord) {

        const fs = require('fs');
        const { prefix, zuneColour, url, imgurl } = require('../conf.json')
	const conf = require('../conf.json')


        let helpEmbed = new Discord.MessageEmbed()
            .setAuthor('zune', `${imgurl}`, `${url}`)
            .setColor(`${colour}`)
            .setTitle('help with zune bot')
            .setURL(`${url}`)
            .addFields("__util commands:__", `${conf.prefix}ping - shows zune bot's ping\n${conf.prefix}help - shows this\n${conf.prefix}about - gives information about this bot\n${conf.prefix}addbot - gives a link for you to add the bot to your server\n`)
            .addFields("__help commands:__", `coming soon`)
            .addFields("__moderator commands:__"
                `coming soon`)
            .addFields("fun commands", `${conf.prefix}meme - Sends a random meme from r/memes${conf.prefix}coin - flips a coin for you\n${conf.prefix}8ball - 8ball that will answer all your questions\n${conf.prefix}dice - rolls a dice for you`)

        message.channel.send(helpEmbed).catch(e => console.log(e))



    }
}
