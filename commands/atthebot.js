const fs = require('fs');
const conf = require('../conf.json')

module.exports = {
    name: 'atthebot',
    description: "when you at the bot ",
    execute(client, message, args, Discord) {

        let atBotEmbed = new Discord.MessageEmbed()
            .setAuthor('zune', `${conf.imgurl}`, `${conf.url}`)
            .setColor(`${conf.zuneColour}`)
            .setDescription(`my prefix for this server is \`${conf.prefix}\`\ndo \`${conf.prefix}help\` for help menu`)
        message.channel.send(atBotEmbed).cache(e => console.log(e))
    }
}