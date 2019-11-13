const Discord = require('discord.js');
//thing
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
			var output = await eco.SubtractFromBalance(member.id, 10)
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
			var output = await eco.SubtractFromBalance(member.id, 15)
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
		message.channel.send('**Ultra Lime Manager Commands**\n--------------------------------------\n;balance - Check your balance\n;event - Check the upcoming event\n;commands - Open up the commands list\n;help - Open up the commands list\n;bio <legend> - View the bio of an LGA legend\n;ranks - View LGA ranks\n;uniform - View LGA uniform\n;moh - View the recipients of the Medal of Honour\n;servers - View the territory of Lime Green Nation');
	}

	if(message.content.startsWith(`;commands`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n--------------------------------------\n;balance - Check your balance\n;event - Check the upcoming event\n;commands - Open up the commands list\n;help - Open up the commands list\n;bio <legend> - View the bio of an LGA legend\n;ranks - View LGA ranks\n;uniform - View LGA uniform\n;moh - View the recipients of the Medal of Honour\n;servers - View the territory of Lime Green Nation');
	}
	
	if(message.content.startsWith(`${prefix}event`)) {
		message.channel.send('__Upcoming events__\nThere are no upcoming events at the moment.');
	}
	
	if(message.content.startsWith(`${prefix}ranks`)) {
		message.channel.send('LGA ranks can be found on this page: https://www.limegreenarmy.com/p/ranks_17.html');
	}
	
	if(message.content.startsWith(`${prefix}uniform`)) {
		message.channel.send('LGA uniform can be found on this page: https://www.limegreenarmy.com/p/uniform_17.html');	
	}
	
	if(message.content.startsWith(`${prefix}underprior`)) {
		message.channel.send('You expire. ( ͡° ͜ʖ ͡°)');
	}
	
	if(message.content.startsWith(`${prefix}bio greeny`))  {
		message.channel.send('**Greeny(2013)**\nHaving been apart of every official LGA generation to-date, Greeny15390 started his journey in the Lime Green Army at their creation on April 5th, 2013. He was leading during both their runs in 2014 and brought LGA back during the summer of 2016 and once again during the summer of 2019.');
	}

	if(message.content.startsWith(`${prefix}bio fresh`))  {
		message.channel.send('**Moonwalker(2013)**\nAlso known as Fresh, Moonwalker started his run in LGA during their first generation in 2013. Being one of the original members, Moonwalker would rejoin the LGA leadership during the summer of 2019.');
	}

	if(message.content.startsWith(`${prefix}bio dmt`))  {
		message.channel.send('**Doctor Mine Turtle(2013)**\nDespite being creator of one of LGAs biggest rivals of 2013, DMT had multiple stints as leader in the early generations of LGA. He was leader various times through the years of 2013 to 2014.');
	}

	if(message.content.startsWith(`${prefix}bio sam`))  {
		message.channel.send('**Sam21619(2013)**\nAlong with Greeny, Sam21619 was one of the main leaders for the entirety of 2014. He was leader during both of LGAs stints during this year and was very active during this time.');
	}

	if(message.content.startsWith(`${prefix}bio memmaw`)) {
		message.channel.send('**Memmaw(2016)**\nThough he would play a small part in LGAs previous generations, Memmaw wouldnt officially become LGA leader until their final generation under Disneys Club Penguin during the summer of 2016.');
	}

	if(message.content.startsWith(`${prefix}leaderboard`)) {
		message.channel.send('**Lime Green Army Leaderboard**\n1. Greeny - ' + limes[1] + ' limes | __LGA LEGEND__ |\n2. zeke - ' + limes[2] + ' limes\n3.Fresh - ' + limes[3] + ' limes | __LGA LEGEND__ |\n4. f - ' + limes[4] + ' limes\n5. Snapple - ' + limes[5] + ' limes\n*Currently viewing top 5 richest penguins*');
	}
	
	if(message.content.startsWith(`${prefix}moh`)) {
		message.channel.send('Medal of Honour recipients are as follows: \nToo44 (2013)\nTom67678 (2013)\nTyler56567 (2013)\nEpicolizard (2013)\nSkyfish (2013)\nWarriorsrevenge (2013)\nMasterTanic (2013)\nPopcorny (2014)\nJustinfortsa (2014)\nAndy21441 (2014)\nEmperor Flor (2014)\nAy12 (2014)\nRyu (2014)\nApollo (2014)\nDunno (2014)\nArceus1296 (2014)\nRedstar (2016)\nSamsungy (2016)\nPikachu624 (2016) \nZeke (2019)\nKarma (2019)\nSnapple (2019)');	
	}
	
	if(message.content.startsWith(`${prefix}servers`)) {
		message.channel.send('LGA Servers - Great White (Capital), Zipline (CPR), Summit (CPATG), Ice Box (CPATG), Yeti (CPATG), Rocky Road (CPATG), Blizzard (Penguin World), Freeo (Free Penguin), Nevasca (Free Penguin)');	
	}
});

client.login(token).catch(err => console.log(err));
