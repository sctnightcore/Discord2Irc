const {Client, RichEmbed} = require('discord.js')
const irc = require('irc')
let channel = '#italia'
const client = new irc.Client('irc.freenode.net', 'Discord2Openkore', {
    channels: [channel],
});
console.log('Application Started')

client.addListener('message', (from, to, message) => {
	// client.say(channel, "I'm a bot!");
    console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});