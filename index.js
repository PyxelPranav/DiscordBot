const Discord = require('discord.js');
const { prefix } = require('./config.json');
const token = process.env.token;
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// pyxelpranav
var members = ['510329448357429280'];
var limes = [25];

// ultra lime manager
members.push('636109710579204099');
limes.push(5000);

//snapple
members.push('270337506581544961');
limes.push(690);

//trev
members.push('568342089591685120');
limes.push(100000004);

//karma
members.push('221648732368666627');
limes.push(700);

//hippyfresh
members.push('589550662547800064');
limes.push(1000);

//zeke
members.push('437016280445222932');
limes.push(1200);

//effot
members.push('312414193259249668');
limes.push(5);

//envolant
members.push('320771763237552128');
limes.push(5);

//ajsonic
members.push('616609825224130561');
limes.push(5);

//shadow warrior
members.push('422819550992531456');
limes.push(5);

//sarah
members.push('463165936275554304');
limes.push(10);

//bobe
members.push('559392459524800514');
limes.push(5);

//dino
members.push('281525414520946689');
limes.push(5);

//im just bacon
members.push('459849126851510272');
limes.push(5);

//miamala
members.push('541605885374365717');
limes.push(5);

client.on('message', message => {

	if(message.content.startsWith(`${prefix}commands`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n--------------------------------------\n;balance - Check your balance\n;event - Check the upcoming event\n;acc <user> - Checks the amount of limes in that users account\n;commands - Open up the commands list\n;help - Open up the commands list\n;bio <legend> - View the bio of an LGA legend\n;leaderboard - View the lime leaderboard');
	}


	if(message.content.startsWith(`${prefix}help`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n--------------------------------------\n;balance - Check your balance\n;event - Check the upcoming event\n;acc <user> - Checks the amount of limes in that users account\n;commands - Open up the commands list\n;help - Open up the commands list\n;bio <legend> - View the bio of an LGA legend\n;leaderboard - View the lime leaderboard');
	}

	if(message.content.startsWith(`${prefix}october uniform`)) {
		message.channel.send('**Recruiting Uniform for October**\nCPRs item of the month(1500 coins)\nhttps://cdn.discordapp.com/attachments/570520105700687882/630552410682687520/Screenshot_1.png');
	}

	if(message.content.startsWith(`${prefix}balance`)) {
		let member = -1;
		for(i in members) {
			if(message.member.id == members[i]) {
				member = i;
			}
		}

		if(member >= 0) {
			message.channel.send('You have ' + limes[member] + ' limes!');
		} else {
			message.channel.send('You have ' + 0 + ' limes!');
		}
	}

	if(message.content.startsWith(`${prefix}acc`)) {
		var member = message.mentions.members.first();
		if(member != undefined) var id = member.id;
		var wowo = -1;

		for(i in members) {
			if(id == members[i]) {
				wowo = i;
				console.log(wowo);
			}
		}

		if(wowo >= 0) {
			message.channel.send('That account contains ' + limes[wowo] + ' limes!');
		} else {
			message.channel.send('That account contains ' + 0 + ' limes!');
		}

	}

	if(message.content.startsWith(`${prefix}event`)) {
		message.channel.send('Next event: EU Training\n@ 12PM PST/3PM EST/8PM BST\nReward: 5 limes');
	}

	if(message.content.startsWith(`${prefix}addmoney`)) {
		var member = message.mentions.members.first();
		if(member != undefined) var id = member.id;
		var wowo = -1;

		for(i in members) {
			if(id == members[i]) {
				wowo = i;
				console.log(wowo);
			}
		}

		if(wowo >= 0) {
			if(message.member.id == 510329448357429280) { limes[wowo] += 5;
			message.channel.send('5 limes were added to the account specified.'); }
		} else {
			message.channel.send('Invalid account');
		}
		
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
		message.channel.send('**Lime Green Army Leaderboard**\n1. Greeny - 9999999 limes | __LGA LEGEND__ |\n2. zeke - 1200 limes\n3.Fresh - 1000 limes | __LGA LEGEND__ |\n4. KARMA - 700 limes\n5. Snapple - 685 limes\n*Currently viewing top 5 richest penguins*');
	}

	console.log(message.member.id);

	var mb = message.mentions.members.first();
	if(mb != undefined) var i = mb.id;

	if(i == members[1])
	message.channel.send('Hey! My prefix is ;');
});

client.login(token).catch(err => console.log(err));
