const { ApplicationCommandType } = require('discord.js');


module.exports = {
	name: 'ping',
	description: "ใ๐คใVeja o meu ping",
  description_localizations: ({
    'en-US': 'ใ๐คใSee my ping',
    'pt-BR': 'ใ๐คใVeja meu ping',
    'es-ES': 'ใ๐คใver mi latencia'
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
      content: `๐ Pong!\n Gateway Ping:**\`${client.ws.ping}ms\`**\n API Ping: **\`${pingg}\`**`
    })
  }, 1200)

    
	}
}
