const { EmbedBuilder, Collection, PermissionsBitField } = require('discord.js')
const ms = require('ms')
const client = require('..');
const config = require('../config.json');
const settings = require('../msg.json')
const prefix = client.config.prefixo;
const cooldown = new Collection();

client.on('messageCreate', async message => {
    if(message.author.bot) return;
	if(message.channel.type !== 0) return;
	if(!message.content.startsWith(prefix)) return; 
	const args = message.content.slice(prefix.length).trim().split(/ +/g); 
	const cmd = args.shift().toLowerCase();
	if(cmd.length == 0 ) return;
	let command = client.commands.get(cmd)
	if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(command) {
        if(command.cooldown) {
            if(cooldown.has(`${command.name}${message.author.id}`)) return message.channel.send({ content: settings.cooldown_msg.replace('<duration>', ms(cooldown.get(`${command.name}${message.author.id}`) - Date.now(), {long : true}) ) });

            if(command.userPerms || command.botPerms) {
                if(!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
                    
                    
                    return message.reply({ content: `${message.author}, Você não possui a permissão: \`${command.userPerms}\` para executar este comando!`})
                }
                if(!message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
                    
                    return message.reply({ content: `${message.author}, Eu não possuo a permissão: \`${command.userPerms}\` para executar este comando!`})
                }
            }

            command.run(client, message, args)
            cooldown.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
            setTimeout(() => {
                cooldown.delete(`${command.name}${message.author.id}`)
            }, command.cooldown);
        } else {
            if(command.userPerms || command.botPerms) {
                if(!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
                    
                    return message.reply({ content: `${message.author}, Você não possui a permissão: \`${command.userPerms}\` para executar este comando!`})
                }
                if(!message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
                    
                    return message.reply({ content: `${message.author}, Eu não possuo a permissão: \`${command.botPerms}\` para executar este comando!`})
                }
            }
            command.run(client, message, args)
        }
    }
})
