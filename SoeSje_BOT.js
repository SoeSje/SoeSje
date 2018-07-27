const Discord = require("discord.js");

const TOKEN = ("NDcxOTczODEzODkwOTczNjk3.DjusMw.Or7tU1v6GR7lXCzmHC6HIIC_JS4")

var bot = new Discord.Client();


bot.on("ready", function() {

});

bot.on("message", function(message) {

    var lowmessage = message.content.toLowerCase();

    if (lowmessage == "banaan") {
        message.channel.sendMessage (":banana:");
    }

    if (lowmessage == ":dab:") {
        message.channel.sendMessage (":dab:");
    }

    if (lowmessage == "ik ben mooi") {
        message.channel.send ("Me neefje is nog mooier! :joy:", {files: ["./images/lelijke_baby.jpg"]});   
    }

});



bot.login(TOKEN);
