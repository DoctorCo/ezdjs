const discord = require('discord.js');
const client = new discord.client({ intents: []});

function newBot(token) {
    if (!token) throw new Error('no token was provided');

    client.once('ready', () => {
        console.log('bot is online');
    });

    client.login(token)
}

function cmdHandler(prefix) {
    client.on('messageCreate', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    });
}


module.exports = {
    newBot,
    cmdHandler
}