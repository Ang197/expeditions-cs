var Bot = require('bot');
var PF = require('pathfinding');
var bot = new Bot('19moubjx', 'arena', 'http://vind-legacy.thegrid.red'); //Put your bot's code here and change training to Arena when you want to fight others.
// var bot = new Bot('YOUR_KEY_HERE', 'arena', 'http://bgdb.hesby.io:9000'); //Put your bot's code here and change training to Arena when you want to fight others.
var goDir;
var Promise = require('bluebird');
Bot.prototype.botBrain = function() {
    return new Promise(function(resolve, reject) {
        _this = bot;
        //////* Write your bot below Here *//////
        //////* Set `myDir` in the direction you want to go and then bot.goDir is set to myDir at the bottom *////////

        /*                                      *
         * This Code is global data!            *
         *                                      */

        // Set myDir to what you want and it will set bot.goDir to that direction at the end.  Unless it is "none"
        var myDir;

        //
        var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y];

        //
        var enemyBots = [];
        if (bot.yourBot.id != 1) enemyBots.push(bot.bot1);
        if (bot.yourBot.id != 2) enemyBots.push(bot.bot2);
        if (bot.yourBot.id != 3) enemyBots.push(bot.bot3);
        if (bot.yourBot.id != 4) enemyBots.push(bot.bot4);

        //finds closest bot and stores in closeset bot. With the for loop, it would go through all enemy bots, based on which one is the closest position. Depending on where you are standing, the code will compare all 4 enemies based on the distance they are from my current location.
        var closestBot = enemyBots[0];
        for (var i = 0; i < enemyBots.length; i++) {
            if (bot.findDistance(myPos, closestBot.posArray) > bot.findDistance(myPos, closestBot[i].posArray)) {
                closestBot = enemyBots[i];
            }
        }

        //This helps finds the richest enemy on the map, and kills them when they get nearby. Just like the for loop in closest enemy bot, it will compare all enemy bots and give me the choice of which one is the richest. What helps that is the if statement, which is basing my loop off of the richest enemy. If it finds that enemy, I will go straight to the enemy and go kill them for their gold.
        var richestBot = enemyBots[0];
        for (var i = 0; i < enemyBots.length; i++) {
            if (enemyBots[i].gold > richestBot.gold) {
                richestBot = enemyBots[i];
            }
        }



        /*                                      *
         * This Code Decides WHAT to do         *
         *                                      */
        
        /* This section decides what my bot should do each turn based on certain 
        conditions. */
        
        var task;
        if (bot.yourBot.life < 35) {
            task = "health";
        }
        // 
        else if (bot.yourBot.life > closestBot.life && bot.findDistance(myPos.closestBot.posArray) < 5) {
            task = "attack closest";
        }
        else if (bot.yourbot.life >= 90) {
            task = "killRichest";
        }
        else {
            task = "freeMines";
        }





        /*                                      *
         * This Code Determines HOW to do it    *
         *                                      */
        if (task === "none") {
            console.log("Going Random!");
            var rand = Math.floor(Math.random() * 4);
            var dirs = ["north", "south", "east", "west"];
            myDir = dirs[rand];
        }
        //Each if and else if statement is meant to cause certain actions based on the distance of the of a certain place or enemy bot is away from your bot. There belongs bot.freeMines, which is an array of all enemies that would be found on screen. This would list all loctions like all being [[x,y][x,y][x,y][x,y]], and the closest mine would check all four arrays and see which is the closest depending on which comes closer to the A.I. With the for loop, it will check all arrays starting with 0, meaning the first array, and will go through all arrays, until it gets the closest.
        else if (task === "freeMines") {
            var closestMine = bot.freeMines[0];
            for (var i = 0; i < bot.freeMines.length; i++) {
                if (bot.findDistance(myPos, closestMine) > bot.findDistance(myPos, bot.freeMines[i])) {
                    closestMine = bot.freeMines[i];
                }
            }
            //With the conosle log, it is supposed to let the user know what the bot's actions are based on a certain turn. With this one, the console is signaling the user that they manage to grab a certain mine for currency
            console.log("Grabbing a free mine!");
            myDir = bot.findPath(myPos, closestMine);
        }
        //This else if statement is the tavern one, in which the player would go to a tavern to recover health because of having conditions of having less than 35 health. The bot.taverns is array which list taverns, which means it would apply to all and gives the A.I the closest one to look for. This would list all loctions like all being [[x,y][x,y][x,y][x,y]], and the closes tavern would check all four arrays and see which is the closest. With the for loop, it will check all arrays starting with 0, meaning the first array, and will go through all arrays, until it gets the closest.
        else if (task === "health") {
            var closestTavern = bot.taverns[0];
            for (var i = 0; i < bot.taverns.length; i++) {
                if (bot.findDistance(myPos, closestTavern) > bot.findDistance(myPos, bot.taverns[i])) {
                    closestTavern = bot.taverns[i];
                }
            }
            //kist like the free mine console log, this one mainly gives the A.I for the decision of having to gain free health.
            console.log("Getting Health!");
            myDir = bot.findPath(myPos, closestTavern);
        }
        //However if the A.I's health is above 35 or the designated in all of the task codes you programmed, the A.I will simply attack the enemy closest to their location.
        else if (task === "attack closest") {
            console.log("Attacking Closest Bot!");
            myDir = bot.findPath(myPos, closestBot.posArray);
        }
        //With this else if statement, my A.I will be killing the richest enemy bot, that is closest to my position. 
        else if (task === "killRichest") {
            console.log("Killing the richest");
            myDir = bot.findPath(myPos, richestBot.posArray);
        }


        /*                                                                          *
         * This Code Sets your direction based on myDir. Change if you want.        */

        bot.goDir = myDir;

        ///////////* DON'T REMOVE ANTYTHING BELOW THIS LINE *//////////////
        resolve();
    });
};

bot.runGame();
