const { ApplicationCommandType } = require('discord.js');


module.exports = {
	name: 'ping',
	description: "『🤖』Veja o meu ping",
  description_localizations: ({
    'en-US': '『🤖』See my ping',
    'pt-BR': '『🤖』Veja meu ping',
    'es-ES': '『🤖』ver mi latencia'
  }),
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {

    let pingg = Date.now() - interaction.createdTimestamp

    
interaction.reply({
  content: `Ping?`
})

  setTimeout( async() => {
    await interaction.editReply({
      content: `🏓 Pong!\n Gateway Ping:**\`${client.ws.ping}ms\`**\n API Ping: **\`${pingg}\`**`
    })
  }, 1200)

    
	}
}
