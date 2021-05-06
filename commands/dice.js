module.exports = {
    name: 'dice',
    description: "rolls a dice",
    execute(client, message, args, Discord) {
        message.reply(`you rolled a \`${Math.ceil(Math.random() * 6)}\``).catch(e => console.log(e))
    }
}