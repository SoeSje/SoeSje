const Discord = require("discord.js");

const TOKEN = (COOKIE)

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
