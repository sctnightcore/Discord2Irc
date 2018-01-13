// This is where you'll change your prefix
const {Collection} = require('discord.js')
exports.prefix = "/"

/* 
This is where you'll be making the bot listen to certain channels
Add channels to the system by using:
*/

let channelMap = {
    '#discord2irc': '148577578146332672'
}

/*
Don't touch this
*/
exports.channels = channelMap

// Change what name it will display in the IRC server
exports.ircName = 'Discord2Irc'

// Add your own token here
exports.token = ''