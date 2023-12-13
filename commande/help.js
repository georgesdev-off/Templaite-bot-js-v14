const { EmbedBuilder } = require('discord.js')


module.exports = {
name: 'help',
run: async (message, args, client) => {


const help = new EmbedBuilder()
.setColor(client.config.couleurs.defaut)
.setTitle(`Help de ${client.user.username}`)
.setURL(`https://github.com/georgesdev-off/Template-bot-js-v14/`)
.setDescription('**👋 Salut** Voici mon préfixe **${client.config.prefix}**, se bot s'agit d'un bot open source retrouvable ici : [GITHUB](https://github.com/georgesdev-off/Template-bot-js-v14/).\n\n****:🤖 ➜ Bot Informations**\n> `ping` : Affiche le ping du bot.')

return message.channel.send({ embeds: [help] })
    }}
