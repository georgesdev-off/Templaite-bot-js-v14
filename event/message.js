
const { EmbedBuilder } = require('discord.js')

module.exports = {
name: 'messageCreate',
async execute(client, message, ) {
            
if (message.author.bot) return
if (message.channel.type == "DM") return;

if(message.content.match(`^<@!?${client.user.id}>( |)$`)) {
const préfixe = new EmbedBuilder()
.setTitle(`Salut ${message.author.tag}`)
.setDescription(`Voici mon préfixe **${client.config.prefix}**, se bot s'agit d'un bot open source retrouvable ici : [GITHUB](https://github.com/georgesdev-off/Template-bot-js-v14/).`)
.setColor(client.config.couleurs.defaut)
message.reply({ embeds: [préfixe] })
}

const args = message.content.slice(client.config.prefix.length).trim().split(' ')
const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName)

if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
if (!command) return
console.log(`[COMMANDE] La commande "${commandName}" à été exécuté par ${message.author.tag}`)
            
try {
command.run(message, args, client)
} catch (error) {
message.channel.send(`> **❌ Je suis désolée mais il y à eu une erreur durant l'execution du code, codé par georges_5_off.**`)
};

}}
