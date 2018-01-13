const Discord = require('discord.js')
const irc = require('irc')

// Where Discord-side commands are executed
const dcmd = {
    ping: (msg, args) => {
        msg.channel.send("Pong!")
    }
}
exports.dcmd = dcmd

// Where irc-side commands are exceuted 
const icmd = {
    ping: (client, from, to, args) => {
        client.say(to, "Pong!")
    }
}
exports.icmd = icmd