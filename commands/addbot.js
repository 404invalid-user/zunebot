const { prefix, Colour, url, imgurl, addUrl } = require('../conf.json')
const { version } = require('../package.json')

module.exports = {
    name: 'addbot',
    description: "command to get a link to add the bot to your server.",
    execute(client, message, args, Discord) {


        let aboutEmbed = new Discord.MessageEmbed()
            .setAuthor('zune', `${imgurl}`, `${url}`)
            .setColor(`${Colour}`)
            .setTitle('click here to add this bot to your server')
            .setURL(`${addUrl}`)
            //.addField('version:', `${version}`)
            //.addField('Website:', `${url}`)

        message.channel.send(aboutEmbed).catch(e => console.log(e))

    }
}