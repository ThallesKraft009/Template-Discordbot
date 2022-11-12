# Base para Bots do Discord.
 *Essa template tem handlers de SlashCommands & PrefixCommands no discord.js v14.*

Coloque as informações necessárias no arquivo "config.json".
```js
{
   "token": "Seu Token",
   "prefixo": "Seu prefixo",
   "botid": "Id do seu bot",
   "guildid": "Id do servidor a ser criado os SlashCommands"
}
```

Outro lugar pra colocar o token é no arquivo handler/slashCommand.js

```js
const TOKEN = `Seu token aqui`;
```

Após fazer isso, inicie seu bot!

# *Aqui estão algumas Bases de comandos.*

**Comando em Prefixo estão na pasta "commands/?/"!**
```js
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: '',
    aliases: [''],
    description: "",
    usage: '',
    category: '',
    cooldown: 5000,
      userPerms: [''],
      botPerms: [''],

    run: async (client, message, args) => {
        
//Código.
    
    }
};
```

**Agora, a base de SlashCommands que estão na pasta "slashCommands/?/".**

```js
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: '',
    description: "",
    description_localizations: ({
      'en-US': '',
      'pt-BR': '',
      'es-ES': ''
  }),
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    default_member_permissions: '',
  
    run: async (client, interaction) => {

//Código.
      
    }
};
```

Lembre de dá os créditos!
