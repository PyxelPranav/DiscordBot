const Discord = require('discord.js');

const { prefix } = '.';

const token = process.env.token;

var eco = require('discord-economy');
const client = new Discord.Client();

client.once('ready', () => {
	
	console.log('Ready!');
});


client.on('message', async message => {
	if(message.content.startsWith(`;balance`)) {
		var output = await eco.FetchBalance(message.author.id)
    	message.channel.send(`You have ${output.balance} limes!`);
	}

	if(message.content.startsWith(`;addbalance 5`)) {
		var member = message.mentions.members.first()
		var adminRole = message.guild.roles.find("name", "HICOM");
		if(message.member.roles.has(adminRole.id)) {
			var output = await eco.AddToBalance(member.id, 5)
			console.log(output.newbalance);
    		message.channel.send(`5 limes were successfully added to that account.`);
    	} else {
    		message.channel.send('You do not have permission to execute this command.');
    	}
	}

	if(message.content.startsWith(`;addbalance 10`)) {
		var member = message.mentions.members.first()
		let adminRole = message.guild.roles.find("name", "HICOM");
		if(message.member.roles.has(adminRole.id)) {
			var output = await eco.AddToBalance(member.id, 10)
			console.log(output.newbalance);
    		message.channel.send(`10 limes were successfully added to that account.`);
    	} else {
    		message.channel.send('You do not have permission to execute this command.');
    	}
	}

	if(message.content.startsWith(`;addbalance 15`)) {
		var member = message.mentions.members.first()
		let adminRole = message.guild.roles.find("name", "HICOM");
		if(message.member.roles.has(adminRole.id)) {
			var output = await eco.AddToBalance(member.id, 15)
			console.log(output.newbalance);
    		message.channel.send(`15 limes were successfully added to that account.`);
    	} else {
    		message.channel.send('You do not have permission to execute this command.');
    	}
	}

	if(message.content.startsWith(`;subtractbalance 5`)) {
		var member = message.mentions.members.first()
		let adminRole = message.guild.roles.find("name", "HICOM");
		if(message.member.roles.has(adminRole.id)) {
			var output = await eco.SubtractFromBalance(member.id, 5)
			console.log(output.newbalance);
    		message.channel.send(`5 limes were successfully removed from that account.`);
    	} else {
    		message.channel.send('You do not have permission to execute this command.');
    	}
	}

	if(message.content.startsWith(`;subtractbalance 10`)) {
		var member = message.mentions.members.first()
		let adminRole = message.guild.roles.find("name", "HICOM");
		if(message.member.roles.has(adminRole.id)) {
			var output = await eco.SubtractFromBalance(member.id, 5)
			console.log(output.newbalance);
    		message.channel.send(`10 limes were successfully removed from that account.`);
    	} else {
    		message.channel.send('You do not have permission to execute this command.');
    	}
	}

	if(message.content.startsWith(`;subtractbalance 15`)) {
		var member = message.mentions.members.first()
		let adminRole = message.guild.roles.find("name", "HICOM");
		if(message.member.roles.has(adminRole.id)) {
			var output = await eco.SubtractFromBalance(member.id, 5)
			console.log(output.newbalance);
    		message.channel.send(`15 limes were successfully removed from that account.`);
    	} else {
    		message.channel.send('You do not have permission to execute this command.');
    	}
	}

	if(message.content.startsWith(`;setbalance`)) {
		let adminRole = message.guild.roles.find("name", "HICOM");
		var str = message.content;
		var num = str.replace( /^\D+/g, '');
		var str2 = '' + num[0]+num[1]+num[2]+num[3]+num[4]+num[5]+num[6]+num[7]+num[8];
		var num2 = parseInt(str2, 10);
		console.log(num2);
		var mem = message.mentions.members.first()
		if(message.member.roles.has(adminRole.id)) {
			var output = await eco.SetBalance(mem.id, num2);
			console.log(output.balance);
			message.channel.send('Operation successful.');
		} else {
			message.channel.send('You do not have permission to execute this command.');
		}
	}

	if(message.content.startsWith(`;help`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n=====================\n;help - View the bot commands\n;commands - View the bot commands\n;addbalance <amount> <user> (ADMIN ONLY!) - Add balance to a specific user\'s account\n;subtractbalance <amount> <user> (ADMIN ONLY!) - Subtract balance from a specific user\'s account\n;setbalance <amount> <user> (ADMIN ONLY!) - Set a user\'s balance');
	}

	if(message.content.startsWith(`;commands`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n=====================\n;help - View the bot commands\n;commands - View the bot commands\n;addbalance <amount> <user> (ADMIN ONLY!) - Add balance to a specific user\'s account\n;subtractbalance <amount> <user> (ADMIN ONLY!) - Subtract balance from a specific user\'s account\n;setbalance <amount> <user> (ADMIN ONLY!) - Set a user\'s balance');
	}
});

client.login(token).catch(err => console.log(err));
