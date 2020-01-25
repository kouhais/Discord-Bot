const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mjk1MDE5MDI2NTM3Nzc1MTA0.XivtQQ.CPCirgnp_693mSPyu9KBkt_p1wA
);
