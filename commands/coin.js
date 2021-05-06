module.exports = {
    name: 'coin',
    description: "flips a coin for you",
    execute(client, message, args, Discord) {

        message.reply(`:coin: you landed a ${["heads", "tails"][Math.floor(Math.random())]}`).catch(e => console.log(e))

    }
}