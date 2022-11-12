const client = require('..')
const chalk = require('colors')
const { version } = require("discord.js")
const Discord = require("discord.js");

const ms = require("ms")
/*
Types:
0 = Jogando
2 = Ouvindo
3 = Assistindo
*/

client.on("ready", () => {

  

const activities = [
	{ name: "Nodejs: ${process.version}, Discordjs: ${Discord.version}", type: 0 }, 
	{ name: "De olho em ${client.users.cache.size} Usuários 👀", type: 0 },
];

const status = [
	'online',
	'dnd',
	'idle'
];

let i = 0;
setInterval(() => {
	if(i >= activities.length) i = 0
	client.user.setActivity(activities[i])
	i++;
}, 15 * 1000); // 30 Segundos

let s = 0;


setInterval(() => {
	if(s >= activities.length) s = 0
	client.user.setStatus(status[s])
	s++;
}, 30 * 1000); //30 Segundos
console.log(chalk.green(`${client.user.tag} ESTÁ ONLINE!`))

  
});
