const { EmbedBuilder } = require('discord.js');

module.exports = {

    name: 'ping',
    aliases: ['pong'],
    description: "Veja meu ping!",
    usage: '',
    category: 'Bot',
    cooldown: 3000,
	userPerms: [''],
	botPerms: [''],

	run: async (client, message, args) => {
        let ping = client.ws.ping;
    let pingg = Date.now() - message.createdTimestamp

    message.reply({content: `Ping?`}).then(msg => {
      setTimeout(() => {
        msg.edit({content: `🏓 Pong! \n Gateway Ping: \`${ping}ms\`\n API Ping: \`${pingg}ms\``})
      }, 1080)
    })
	}
};
