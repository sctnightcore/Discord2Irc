const startTime = new Date()
const {Client, RichEmbed} = require('discord.js')
const irc = require('irc')
const {channels, prefix, ircName, token} = require('./config.js')
const {dcmd, icmd} = require('./commands.js')
const _ = require('underscore')

let pchannel = []
for (i in channels) {
    pchannel.push(i)
}

const client = new irc.Client('irc.freenode.net', ircName, {
    channels: pchannel,
});

console.log(`Application Started.`)

const bot = new Client({disableEveryone: true})
bot.login(token)


// IRC Client Event handlers

client.addListener('registered', msg => {
    let ircDate = new Date()
    console.log(`IRC Client connected. Took: ${ircDate - startTime}ms`)
})

client.addListener('message', (from, to, message) => {
    if (message.startsWith("d!")) return client.say(to, "Discord-side commands can only be used in Discord.")

    if (message.startsWith("i!")){
        let args = message.split("i!").slice(1).join(" ").split(" ")
        if (icmd.hasOwnProperty(args[0])){
            icmd[args[0]](client, from, to, args)
        }
    } else {
        sendMsgI(from, to, message)
    }
    
    // if (icmd.hasOwnProperty()){}
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

// Discord Client Event handlers

bot.on('ready', () => {
    let dscDate = new Date()
    console.log(`Discord Client connected. Took: ${dscDate - startTime}ms`)
})

bot.on('message', msg => {
    let type, to
    if (msg.author === bot.user) return
    if (msg.content.startsWith("i!")) return msg.channel.send("IRC-side commands can only be used in irc.")

    if (msg.content.startsWith("d!")){
        let args = msg.content.split("d!").slice(1).join(" ").split(" ")
        if (dcmd.hasOwnProperty(args[0])){
            dcmd[args[0]](msg, args)
        }
    } else {
        sendMsgD(msg)
    }
    
})

function sendMsgI(from, to, message){
    bot.channels.get(channels[to]).send(`${from}: ${message}`)
}
function sendMsgD(msg){
    let to = (_.invert(channels))[msg.channel.id]
    client.say(to, `${msg.author.tag}: ${msg.content}`)
}