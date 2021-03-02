const Discord = require('discord.js')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; /*Parempi vaan constiin päivittää*/
const client = new Discord.Client();
const prefix = '.'

client.login('ODA1NDY4Njc1ODkyNTc2MzI2.YBbVKQ.flToKI6sSTVcJF2zluAtHnZ1TnE');

client.on('ready', () => {
	console.log(`bot, is ready for use.`, "ready");	
});

	function Main(url, channel) {
			try {
				do {
					var req = new XMLHttpRequest();
					req.open('GET', url, false);
					req.send(null);
					var headers = req.getResponseHeader('x-citizenfx-url');
				}while(headers.includes('https'))
				if(headers.includes('https://')) {				
				} else {
					const location = client.channels.cache.get(channel);
					const exampleEmbed = new Discord.MessageEmbed()
					.setColor('#069dcf')
					.setTitle('RJ Finder')
					.addFields(
					{ name: 'CFX', value: url },
					{ name: 'IP Address', value: headers },
					)
					.setTimestamp()
					.setFooter('RJ Finder v1.0');
					location.send(exampleEmbed);
				}		
			} catch(err) {
			}
	}
	

client.on("message", function(message) {
		if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
    if (command === '') {
		const link = args[0];
			if (!args.length) {
				const exampleEmbed33 = new Discord.MessageEmbed()
					.setColor('#f00028')
					.setTitle('Error.')
					.setDescription(`You didn't provide any arguments, ${message.author}!`)
					.setTimestamp()
					.setFooter('Error.');
						message.channel.send(exampleEmbed33); /*Returnia ei tarvitse käyttää ollenkaan koska kyseessä ei ole c++ ja sen paskat funktiot*/
		} else if(link.includes('https://')) {
			const channel = message.channel.id;
			Main(link, channel);
		} else {
			const exampleEmbed33 = new Discord.MessageEmbed()
			.setColor('#f00028')
			.setTitle('Error.')
			.setDescription(`Invalid URL Try Again By adding https:// ifront of Your Cfx IP, ${message.author}!`)
			.setTimestamp()
			.setFooter('RJ Finder v1.0');
			message.channel.send(exampleEmbed33);
		}
	}
});