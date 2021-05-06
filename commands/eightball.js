module.exports = {
    name: '8ball',
    description: "works just like a 8ball and answeres your question",
    execute(client, message, args, Discord) {
        if (!args[1]) return message.reply("you need to ask something");
        if (args[1]) {
            function randome(no) {
                return Math.floor(Math.random() * no);
            }
            let yes = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes."]
            let dontKnow = ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."]
            let no = ["Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
            let randomeAnswers = [yes, dontKnow, no][randome(3)]
            message.reply(`${randomeAnswers[randome(randomeAnswers.length)]}`).catch(e => console.log(e))
        }
    }
}