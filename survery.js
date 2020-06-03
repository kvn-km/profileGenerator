const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const playerProfile = {};

rl.question('What\'s your name? Nicknames are also acceptable :) -> ', (answer) => {
  playerProfile["name"] = answer;
  rl.question("What's an activity you enjoy? -> ", (answer) => {
    playerProfile["hobby"] = answer;
    rl.question("What do you listen to while doing that? -> ", (answer) => {
      playerProfile["music"] = answer;
      rl.question("Which  meal is your favorite? (eg: breakfast, lunch...?) -> ", (answer) => {
        playerProfile["meal"] = answer;
        rl.question("What's your favorite thing to eat for that meal? -> ", (answer) => {
          playerProfile["food"] = answer;
          rl.question("Which sport is your absolute favorite? -> ", (answer) => {
            playerProfile["sport"] = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! -> ", (answer) => {
              playerProfile["power"] = answer;
              rl.close();
              console.log(`${playerProfile.name} loves listening to ${playerProfile.music} while ${playerProfile.hobby}, devouring ${playerProfile.food} for ${playerProfile.meal}, prefers ${playerProfile.sport} over any other sport, and is amazing at ${playerProfile.power}.`);
            });
          });
        });
      });
    });
  });
});


