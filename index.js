//bot
const Discord  = require('discord.js');
const token = 'OTIxMDQwMDg0MjA2MjMxNjAy.YbtHbA.97yclLUC4Xb9miTjDXKiJ54sY8k';
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
				message.guild.channels.create("?????????????????????????? ????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
			  	message.guild.channels.create("?????????????????????????????? ????", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
				message.guild.channels.create("?????????????????????????????? ????????", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
				 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
				 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
				 deny: [] //Deny permissions
				   }
			],
		  }) 
			  	message.guild.channels.create("?????????????????????????????? ????????????", {
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
				message.guild.channels.create("?????????????????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("??????????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("??????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("??????????????????????????????????????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("?????????????????????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("?????????????????????????????????????????????", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("??????????????????????????????????", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
			  
					  message.guild.channels.create("??????????????????????????????????????", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
			  
					  message.guild.channels.create("??????????????????????????????", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL'], //Allow permissions
					 deny: ['CONNECT'] //Deny permissions
					   }
				],
			  })
			  
					  message.guild.channels.create("??????????????????????", {
					type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL'], //Allow permissions
					 deny: ['CONNECT'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("??????????????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
					 deny: ['SEND_MESSAGES'] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("??????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("??????????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })
					  message.guild.channels.create("??????????????????????????", {
					type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
					permissionOverwrites: [
					   {
					 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
					 allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
					 deny: [] //Deny permissions
					   }
				],
			  })	  
					  message.guild.channels.create("?????????????????????? ????????????", {
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
				message.guild.channels.create("???????welcome", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????rules", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????news", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????announcement", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????serverupdate", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????Public", {
        		type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????Admin", {
        		type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL'], //Allow permissions
             	deny: ['CONNECT'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????Private", {
        		type: "voice", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'CONNECT'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????ticket", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'], //Allow permissions
             	deny: ['SEND_MESSAGES'] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????chat", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????memes", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????video", {
        		type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        		permissionOverwrites: [
           		{
             	id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             	allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES'], //Allow permissions
             	deny: [] //Deny permissions
		   		}
        	],
      	})
		  		message.guild.channels.create("???????spam", {
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
			.addField("setup ", "server has created and I just left the server????????")
			message.channel.send(setup)
		}
	}
})

//bot login verify
bot.login(token)
