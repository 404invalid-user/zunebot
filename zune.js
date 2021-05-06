const Discord = require('discord.js');
const fs = require('fs');
const conf = require('./conf.json')
const zune = new Discord.Client();


//functions__
function addCmd(guild) {
    var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    data.totalCommandsSent++;
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}
//___


zune.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    zune.commands.set(command.name, command);
}

//cmddd = `${zune.commands.get('about').description}`

zune.on('ready', () => {
    console.log('zune bot runing')
    console.log('made by 404invalid-user')
    console.log('website: zune.tk')

    zune.user.setActivity("music | z.help")
    console.log(commandFiles)
})

zune.on('message', message => {

    if (!message.guild) return;

    //needs server prefix and user not to be a bot
    if (!message.content.startsWith(conf.prefix) || message.author.bot) return;

    let args = message.content.toLowerCase().substring(conf.prefix.length).split(" ");
    const cmd = args[0]


    //eval remove___________________
    if (args[0] == 'eval') {
        const evalargs = message.content.split(" ").slice(1);

        function clean(text) {
            if (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }
        if (message.author.id !== conf.ownerId) return message.channel.send(`no! you cant do that only <@!${conf.ownerId}> can.`);

        if (message.author.id == conf.ownerid) {
            try {
                const code = evalargs.join(" ");
                let evaled = eval(code);

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);

                message.channel.send(clean(evaled), { code: "xl" });
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        }
        //++++++++++++++++++++++
    }

    if (!zune.commands.has(cmd)) return;

    try {
        zune.commands.get(cmd).execute(zune, message, args, Discord);
        addCmd();
    } catch (error) {
        console.error(error);
        message.reply('there was an error with that command');
    }

    /*
    if (args[0] == 'c') {
        addCmd()
        let channel = client.channels.cache.get(`${args[1]}`);
        channel.join().then(connection => {
            // Yay, it worked!
            console.log("Successfully connected.");
        })
    }
    if (args[0] == 'd') {
        addCmd()
        let channel = client.channels.cache.get(`${args[1]}`);
        channel.leave()
    }
    */

});

zune.on('guildCreate', guild => {
    //umm remove this 
})




zune.login(conf.token)
