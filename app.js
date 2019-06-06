//      How it works:
//      1) npm install discord.js
//      2) Create config.json {"token": "yourdiscordbottoken"} in same folder as your app.js
//      3) Replace 'bot by zenx#0001' in setActivity to whatever you want your game status to be
//      4) Open console: node app.js  (or your js file name)
//      5) You will now have your custom game status, example: http://prntscr.com/nyfxyh



//Variables
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");


//Set your game activity
bot.on(`ready`, () => {

    bot.user.setPresence({
        status: `dnd`,       //possible status: online, idle, offline, dnd
        game: {
            name: "Bot by zenx#0001",
            type: "PLAYING"
        }
    })

});




//Text on successfull launch.
console.log('Custom status has been succesfully launched.');


//Loads token from config.json   http://prntscr.com/ny2fh1 example
bot.login(config.token);






