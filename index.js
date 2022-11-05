const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const config = require('./config.json')
const fs = require('fs')

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
    GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});


client.commands = new Collection()
client.aliases = new Collection()
client.config = require('./config.json');
client.slashCommands = new Collection();
module.exports = client;
client.categories = fs.readdirSync("./commands/");

["command", "events", "slashCommand"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});



client.login(config.token)

