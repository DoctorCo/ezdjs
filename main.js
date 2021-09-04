const discord = require('discord.js');
const client = new discord.Client({ intents: []});

function newBot(token) {
    if (!token) throw new Error('no token was provided');

    client.once('ready', () => {
        console.log('bot is online');
    });

    client.login(token);
}

function cmdHandler(prefix) {
    if (!prefix) throw new Error('no prefix was provided');

    client.on('messageCreate', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    });
}

function messageCommand(commandName, message) {
    if (command === commandName) {
        message.channel.send(message);
    }
}

function replyMessageCommand(commandName, replyMessage) {
    if (command === commandName) {
        message.reply(replyMessage);
    }
}


module.exports = {
    newBot,
    cmdHandler,
    messageCommand,
    replyMessageCommand
}