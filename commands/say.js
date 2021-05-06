module.exports = {
    name: 'say',
    description: "say command for mods and admins",
    author: '"404invalid-user" (invaliduser.gitlab.io)',
    execute(client, message, args, Discord) {

        const staffRoleNames = ["admin", "mod"]

        let staffRole = message.member.roles.cache.find(r => staffRoleNames.includes(r.name))
        if (!staffRole) return message.reply("you cant do that only staff can").catch(e => console.log(e));
        if (staffRole) {
let prefix = "z."

 if (!args[1]) { message.reply(`Error Supply a channel to send to send`) };
        if (args[1]) {

            let sayArgs = message.content.substring(prefix.length).split(" ");
            let sayChannel = message.guild.channels.cache.get(sayArgs[1].replace('<#', '').replace('>', ''))

            if (message.content.includes('@everyone')) return message.reply(`Holup you can @ every one`)
            if (message.content.includes('@here')) return message.reply(`Holup you cant @ here`)

            sayChannel.send(`${sayArgs.slice(2).join(" ")}`).catch(e => console.log(e))


        }

        }
    }
}
