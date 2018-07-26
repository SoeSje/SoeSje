const Discord = require("discord.js");

const TOKEN = ("NDcxOTczODEzODkwOTczNjk3.DjusMw.Or7tU1v6GR7lXCzmHC6HIIC_JS4")

var bot = new Discord.Client();


bot.on("ready", function() {

});

bot.on("message", function(message) {
    if (message.content == "banaan") {
        message.channel.sendMessage (":banana:");
    }

});

bot.login(TOKEN);