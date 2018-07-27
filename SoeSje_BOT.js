const Discord = require("discord.js");

const TOKEN = ("NDcxOTczODEzODkwOTczNjk3.DjusMw.Or7tU1v6GR7lXCzmHC6HIIC_JS4")

var bot = new Discord.Client();


bot.on("ready", function() {

});

bot.on("message", function(message) {
    if (message.content == "banaan") {
        message.channel.sendMessage (":banana:");
    }

    if (message.content == "ik ben mooi")
        message.channel.sendMessage ("Dit noem jij mooi? :joy:")
        message.reply(message.author.avatarURL)
    }

});



bot.login(TOKEN);