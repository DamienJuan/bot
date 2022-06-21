const Discord = require("discord.js");
const Bot = new Discord.Client();
const Play = require('./commands/play')
const Leave = require('./commands/leave')

Bot.on('ready', function () {
    Bot.user.setActivity('QLW (que la war)').catch(console.error)
})

Bot.on('message', function (message) {
    let commandUsed =
    Play.parse(message) ||
    Leave.parse(message)
})

Bot.login("ODE5OTg0NDI2Nzg4MTkyMjk2.GR6fK4.soO6mSiqmCYN_JxXN1NjgI3POQpVsutOyShlJk");