const { VoiceChannel } = require('discord.js')
const Command = require('./command')

module.exports = class Leave extends Command{
    static match (message) {
        return message.content.startsWith('!leave')
    }
    static action (message) {
        message.guild.me.voice.channel.leave()
    }
}