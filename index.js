//bot
const Discord  = require('discord.js');
const token = 'OTIxMDQwMDg0MjA2MjMxNjAy.YbtHbA.fXTceTAv6HOotc4l73W7pfCOhAM';
const bot = new Discord.Client();
const disbut = require('discord-buttons')(bot);
//prefix
const prefix = '/srv ';
//bot online event
bot.on('ready', () => {

    console.log("bot is online(press ^C to restart or close)");
    bot.user.setActivity("DPcord | dicord srv")
})

//message
bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ") 
	
	if (message.content.startsWith(prefix)) {
		if (args[0] === "help") {
			let help = new Discord.MessageEmbed()
			.setTitle("help")
			.addField("start a command or prefix:", "/srv")
			.addField("add a server to server list:", "/srv config")
			.addField("server list:", "/srv list")
			.addField("last servers:", "/srv last")
			message.channel.send(help)
		}
	}	
	if (message.content.startsWith(prefix)) {
		if (args[0] === "last") {
			let last = new Discord.MessageEmbed()
			.setTitle("last servers:")
			.addField("public server #3", "None")
			.addField("roblox #2", "None")	
			.addField("public game #5", "None")
			message.channel.send(last)
		}
	}
	if (message.content.startsWith(prefix)) {
		if (args[0] === "config") {
			let config = new Discord.MessageEmbed()
			.setTitle("server config")
			.addField("Invite: ", "invite set successfuly")
			.addField("channels: ", "channels accepted")
			.addField("verify:", "server has been verified")
			message.channel.send(config)
		}
	}
	if (message.content.startsWith(prefix)) {
		if (args[0] === "public") {
			let public = new Discord.MessageEmbed()
			.setTitle("the last public server:")
			.addField("public #3:", "https://discord.gg/fbBY7Zxt")
			.setImage("https://cdn.discordapp.com/attachments/919915967541284885/921701144877735956/unknown.png")
			message.channel.send(public)
		}
	}
	if (message.content.startsWith(prefix)) {
        if (args[0] === "list") {
            let list = new Discord.MessageEmbed()
            .setTitle("servers list")
            .addField("roblox #1", "https://discord.gg/9xVV3Ygz")
            .addField("call of duty #1", "Under Construction")
			.addField("public #3", "https://discord.gg/fbBY7Zxt")
			.addField("public game #5", "https://discord.gg/3D5NWQG6")
			.addField("minecraft #1", "https://discord.gg/dh3fPUGA")
            message.channel.send(list)
        }
    }
	if (message.content.startsWith(prefix)) {
		if (args[0] === "create") {
			if (args[1] === "voice") {
				message.guild.channels.create("【🔎】𝐅𝐢𝐧𝐝 𝐌𝐮𝐬𝐢𝐜", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
			  	message.guild.channels.create("【🎵】𝐌𝐮𝐬𝐢𝐜 𝐈", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
				message.guild.channels.create("【🎵】𝐌𝐮𝐬𝐢𝐜 𝐈𝐈", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
				 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
				 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
				 deny: [] //Deny permissions
				   }
			],
		  }) 
			  	message.guild.channels.create("【🎵】𝐌𝐮𝐬𝐢𝐜 𝐈𝐈𝐈", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
				 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
				 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
				 deny: [] //Deny permissions
			   }
		],
	  })
			}
			if (args[1] === "sport") {
				
			}
			if (args[1] === "stylish") {
				message.guild.channels.create("【✨】𝐖𝐞𝐥𝐜𝐨𝐦𝐞", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【📙】𝐑𝐮𝐥𝐞𝐬", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【📩】𝐍𝐞𝐰𝐬", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【📢】𝐀𝐧𝐧𝐨𝐮𝐧𝐜𝐞𝐦𝐞𝐧𝐭", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【⚒】𝐏𝐫𝐨𝐛𝐥𝐞𝐦𝐬", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【⛏】𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【👥】𝐏𝐮𝐛𝐥𝐢𝐜", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
			  
					  message.guild.channels.create("【🔐】𝐏𝐫𝐢𝐯𝐚𝐭𝐞", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
			  
					  message.guild.channels.create("【🥈】𝐀𝐝𝐦𝐢𝐧", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL'], //Allow permissions
					 deny: ['CONNECT'] //Deny permissions
					   }
				],
			  })
			  
					  message.guild.channels.create("【😴】𝐀𝐅𝐊", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL'], //Allow permissions
					 deny: ['CONNECT'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【🎫】𝐓𝐢𝐜𝐤𝐞𝐭", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【💬】𝐂𝐡𝐚𝐭", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【😅】𝐌𝐞𝐦𝐞𝐬", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("【💯】𝐒𝐩𝐚𝐦", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })	  
					  message.guild.channels.create("【🤖】𝐁𝐨𝐭 𝐂𝐌𝐃", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
			}
			if (args[1] === "classic") {
				message.guild.channels.create("🥳ㅣwelcome", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("📙ㅣrules", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("📩ㅣnews", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("📢ㅣannouncement", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("🚀ㅣserverupdate", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("👥ㅣPublic", {
        		type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("🥇ㅣAdmin", {
        		type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL'], //Allow permissions
             	deny: ['CONNECT'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("🔐ㅣPrivate", {
        		type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("🎫ㅣticket", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("💬ㅣchat", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("😂ㅣmemes", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("📷ㅣvideo", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("💥ㅣspam", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  
			}
		}
	}
	if (message.content.startsWith(prefix)) {
		if (args[0] === "setup") {
			let setup = new Discord.MessageEmbed()
			.setTitle("setup")
			.addField("setup ", "server has created and I just left the server😥😥")
			message.channel.send(setup)
		}
	}
})

//bot login verify
bot.login(token)