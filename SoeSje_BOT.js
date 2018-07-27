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

    if (lowmessage == "ik ben mooi") {

       var random = Math.floor((Math.random() * 2) + 1);

        if (random == 1) {
          message.channel.send ("Dit noem jij mooi? :joy:", message.author.avatarURL);   
        }

        

        if (random == 2) {
            message.channel.sendMessage ("Me neefje is nog mooier! :joy:", {files: ["./images.lelijke_baby"]});   
          }

  

    }

});



bot.login(TOKEN);
