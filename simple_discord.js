

const { Client, Intents } = require('discord.js');
//import the discord module
const Discord = require('discord.js');

//import the config file
const config = require('./config.json');
//if config file doesn't exist, create it  (this is for the first time the bot is run)
if (!config.token) {
    console.log("Creating config.json file");
    require('fs').writeFileSync('./config.json', JSON.stringify({ token: 'token' }));
}



//define the discord bot and give it all intents
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES
] });










//on ready event
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);  
    bot.user.setActivity('with the server', { type: 'WATCHING' });
});

//make the bot's prefix !
bot.prefix = '!';




//make the bot respond to bot prefix "ping" and respond with "pong"
bot.on('message', msg => {
    if (msg.content.startsWith(bot.prefix + 'ping')) {
        msg.channel.send('pong');
    }
});





//login to the bot
bot.login(config.token);