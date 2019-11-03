const Discord = require('discord.js');
const { prefix } = require('./config.json');
const token = process.env.token;
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// pyxelpranav
var members = ['510329448357429280'];
var limes = [45];

//trev
members.push('568342089591685120');
limes.push(100000069);

//zeke
members.push('437016280445222932');
limes.push(1200);

//hippyfresh
members.push('589550662547800064');
limes.push(1010);

//karma
members.push('221648732368666627');
limes.push(765);

//snapple
members.push('270337506581544961');
limes.push(765);

//sarah
members.push('463165936275554304');
limes.push(502);

//dino
members.push('281525414520946689');
limes.push(40);

//effot
members.push('312414193259249668');
limes.push(35);

// betherzelli
members.push('504194785288912896');
limes.push(30);

// lavandula
members.push('328343566482931713');
limes.push(30);

//holden
members.push('335742772722270208');
limes.push(30);

//ajsonic
members.push('616609825224130561');
limes.push(25);

// dawnables
members.push('350088765731241984');
limes.push(20);

//sienna guac
members.push('418543492663476227');
limes.push(20);

//shadow warrior
members.push('422819550992531456');
limes.push(15);

//bobe
members.push('559392459524800514');
limes.push(15);

//miamala
members.push('541605885374365717');
limes.push(15);


// jingle
members.push('307701567019024384');
limes.push(10);

// miles edgeworth
members.push('497554422931652608');
limes.push(10);

// seanthekill
members.push('461202532623056917');
limes.push(10);

//gordon ramsay
members.push('566066628824137740');
limes.push(10);

//davo90k
members.push('534084798419828773');
limes.push(10);

//nathan the man
members.push('631216443861499943');
limes.push(10);

//envolant
members.push('320771763237552128');
limes.push(5);

//im just bacon
members.push('459849126851510272');
limes.push(5);

// ultra lime manager
members.push('636109710579204099');
limes.push(5000);

client.on('message', message => {

	if(message.content.startsWith(`${prefix}commands`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n--------------------------------------\n;balance - Check your balance\n;event - Check the upcoming event\n;acc <user> - Checks the amount of limes in that users account\n;commands - Open up the commands list\n;help - Open up the commands list\n;bio <legend> - View the bio of an LGA legend\n;leaderboard - View the lime leaderboard\n;ranks - View LGA ranks\n;uniform - View LGA uniform\n;status - View your rank in LGA\n;moh - View the recipients of the Medal of Honour\n;servers - View the territory of Lime Green Nation');
	}


	if(message.content.startsWith(`${prefix}help`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n--------------------------------------\n;balance - Check your balance\n;event - Check the upcoming event\n;acc <user> - Checks the amount of limes in that users account\n;commands - Open up the commands list\n;help - Open up the commands list\n;bio <legend> - View the bio of an LGA legend\n;leaderboard - View the lime leaderboard\n;ranks - View LGA ranks\n;uniform - View LGA uniform\n;status - View your rank in LGA\n;moh - View the recipients of the Medal of Honour\n;servers - View the territory of Lime Green Nation');
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
		message.channel.send('Next event: **Matterhorn Defense!** 3rd November, 2019 @3PM EST; Reward - 15 limes');
	}
	
	if(message.content.startsWith(`${prefix}ranks`)) {
		message.channel.send('LGA ranks can be found on this page: https://www.limegreenarmy.com/p/ranks_17.html');
	}
	
	if(message.content.startsWith(`${prefix}uniform`)) {
		message.channel.send('LGA uniform can be found on this page: https://www.limegreenarmy.com/p/uniform_17.html');	
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
		message.channel.send('**Lime Green Army Leaderboard**\n1. Greeny - ' + limes[1] + ' limes | __LGA LEGEND__ |\n2. zeke - ' + limes[2] + ' limes\n3.Fresh - ' + limes[3] + ' limes | __LGA LEGEND__ |\n4. KARMA - ' + limes[4] + ' limes\n5. Snapple - ' + limes[5] + ' limes\n*Currently viewing top 5 richest penguins*');
	}
	
	if(message.content.startsWith(`${prefix}moh`)) {
		message.channel.send('Medal of Honour recipients are as follows: \nToo44 (2013)\nTom67678 (2013)\nTyler56567 (2013)\nEpicolizard (2013)\nSkyfish (2013)\nWarriorsrevenge (2013)\nMasterTanic (2013)\nPopcorny (2014)\nJustinfortsa (2014)\nAndy21441 (2014)\nEmperor Flor (2014)\nAy12 (2014)\nRyu (2014)\nApollo (2014)\nDunno (2014)\nArceus1296 (2014)\nRedstar (2016)\nSamsungy (2016)\nPikachu624 (2016) \nZeke (2019)');	
	}
	
	if(message.content.startsWith(`${prefix}servers`)) {
		message.channel.send('LGA Servers - Great White (Capital), Zipline (CPR), Blizzard (CPATG), Matterhorn (CPATG), Rocky Road (CPATG), Fog (CPATG), Summit (CPATG), Ice Box (CPATG), Ice Bank (CPATG), White House (CPATG)');	
	}
	
	if(message.content.startsWith(`${prefix}status`)) {
		var a = members.indexOf(message.member.id);
		message.channel.send('Rank in LGA - ' + a);
	}

	console.log(message.member.id);

	var mb = message.mentions.members.first();
	if(mb != undefined) var i = mb.id;

	if(i == members[1])
	message.channel.send('Hey! My prefix is ;');
});

client.login(token).catch(err => console.log(err));
