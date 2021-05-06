const fs = require('fs');
const { version } = require('../package.json')
const { colour, url, imgurl } = require('../conf.json')
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

module.exports = {
    name: 'about',
    description: "info about the bot.",
    execute(client, message, args, Discord) {


        message.channel.send("about").then(m => {

            //bots uptime
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            let uptime = `${days} d, ${hours} h, ${minutes} m, ${seconds} s`;

            //bots ping 
            var ping = m.createdTimestamp - message.createdTimestamp;
            var apiPing = Math.round(client.ws.ping)
            var thePing = "ping: " + `${ping}` + " api ping: " + `${apiPing}`


            let aboutEmbed = new Discord.MessageEmbed()
                .setAuthor('zune', `${imgurl}`, `${url}`)
                .setColor(`${zuneColour}`)
                .setTitle('about')
                .setThumbnail(`${imgurl}`)
                .setURL(`${url}`)
                .addField('version:', `${version}`)
                .addField('Up Time', uptime)
                .addField('Ping', thePing)
                .addField('total commands sent:', `${data.totalCommandsSent}`)
                .addField('Website:', `${url}`)
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`)


            m.edit(aboutEmbed).catch(e => console.log(e))

        });

    }
}