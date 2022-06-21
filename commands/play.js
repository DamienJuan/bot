const { VoiceChannel } = require('discord.js')
const Command = require('./command')

module.exports = class Play extends Command{
    static match (message) {
        return message.content.startsWith('!war')
    }
    static action (message) {
        message.member.voice.channel.join().then(VoiceConnection => {
            VoiceConnection.play("./timer_war.mp3").on("finish", () => VoiceConnection.disconnect());
            message.reply("Playing...");
        }).catch(e => console.log(e))
    }
}