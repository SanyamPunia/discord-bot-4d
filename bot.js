require("dotenv").config();

const fetch = require("node-fetch");
const got = require("got");

const mongoose = require("mongoose");
mongoose.connect("...", {
  useNewUrlPaser: true,
  useUnifiedTopology: true
});


const {
  Client,
  DiscordAPIError,
  MessageEmbed
} = require("discord.js");
const client = new Client({
  partials: ["MESSAGE", "REACTION"],
});
const Levels = require("discord-xp");

const PREFIX = "$";

client.on("ready", () => {
  client.user.setActivity("Managing 𝟰𝗗");
  console.log(`${client.user.tag} has logged in!`);
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (CMD_NAME === "kick") {
      if (!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(
          "Sorry, you dont have perms to do use that command!"
        );
      if (args.length === 0) return message.reply("Please provide an ID");
      const member = message.guild.members.cache.get(args[0]);

      if (member) {
        member
          .kick()
          .then((member) => message.channel.send(`${member} was kicked LMAO!`))
          .catch((err) => message.channel.send("I cannot kick that user :("));
      } else {
        message.channel.send("That member was not found!");
      }
    } else if (CMD_NAME === "ban") {
      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply(
          "Sorry, you dont have perms to do use that command!"
        );
      if (args.length === 0) return message.reply("Please provide an ID");

      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send("User was banned successfully!");
      } catch (err) {
        console.log(err);
        message.channel.send(
          "An error occured. Either I do not have permissions or the user was not found."
        );
      }
    }
  }
});


client.on("message", (message) => {
  if (message.content === PREFIX + "ok") {
    const embed = new MessageEmbed()
      // .setTitle("ok")
      .setColor(0x3d84b8)
      .setDescription("ok");
    message.channel.send(embed);

  }
})

client.on("message", (message) => {
  // If the message is "what is my avatar"
  if (message.content === "$av") {
    // Send the user's avatar URL
    message.reply(
      message.author.displayAvatarURL({
        format: "png",
        size: 1024
      })
    );
  }
});

client.on("message", (message) => {
  // gay %age calc
  if (message.content === PREFIX + "howgay") {
    let gayPercentage = Math.floor(Math.random() * 100) + 1;
    const embed = new MessageEmbed()
      .setTitle("Gay Calculation")
      .setColor(0x3d84b8)
      .setDescription("You are " + gayPercentage + "% gay!");
    message.channel.send(embed);
  }

  // dumb %age
  if (message.content === PREFIX + "dumb") {
    console.log("dumb");
    let dumbRate = Math.floor(Math.random() * 100) + 1;
    const embed = new MessageEmbed()
      .setTitle("Dumb Rate")
      .setColor(0x3d84b8)
      .setDescription(
        "Dumbass confirmed! You are " + dumbRate + "% dumb ;)"
      );
    message.channel.send(embed);
  }

  // beepboop
  if (message.content === PREFIX + "beep") {
    const embed = new MessageEmbed()
      .setColor(0x3d84b8)
      .setDescription("boop");
    message.channel.send(embed);
  }
  //reverseB
  if (message.content === PREFIX + "boop") {
    const embed = new MessageEmbed()
      .setColor(0x3d84b8)
      .setDescription("beep");
    message.channel.send(embed);
  }

  // pingpong
  if (message.content === PREFIX + "ping") {
    const embed = new MessageEmbed()
      .setColor(0x3d84b8)
      .setDescription("pong");
    message.channel.send(embed);
  }
  // pingpongB
  if (message.content === PREFIX + "pong") {
    const embed = new MessageEmbed()
      .setColor(0x3d84b8)
      .setDescription("ping");
    message.channel.send(embed);
  }

  // message reactions
  if (message.content === PREFIX + "react") {
    const customEmoji_1 = message.guild.emojis.cache.find(emoji => emoji.name === 'great');
    // const customEmoji_2 = message.guild.emojis.cache.find(emoji => emoji.name === 'moldo');

    message.react(customEmoji_1);
    // message.react(customEmoji_2); from other server
    message.react("🧒");
    message.react("👦");
    message.react("👨");
    message.react("🧓");
    message.react("🎅");


  }

  // random pp size
  if (message.content === PREFIX + "pp") {
    let randomEqualChar = Math.floor(Math.random() * 10) + 1;
    const equalChar = "=";
    const embed = new MessageEmbed()
      .setTitle("PP Size")
      .setColor(0x3d84b8)
      .setDescription(
        "Your pp is " + "8" + equalChar.repeat(randomEqualChar) + "D" + " long!"
      );
    message.channel.send(embed);
  }

  // random age
  let randomAge = Math.floor(Math.random() * 100) + 1;
  if (message.content === PREFIX + "age") {
    if (randomAge < 18) {
      const embed = new MessageEmbed()
        .setTitle("Age")
        .setColor(0x3d84b8)
        .setDescription("You're " + randomAge + "yrs old. Young mf 🧒!");
      message.channel.send(embed);
    } else if (randomAge >= 18 && randomAge <= 25) {
      const embed = new MessageEmbed()
        .setTitle("Age")
        .setColor(0x185adb)
        .setDescription("You're " + randomAge + "yrs old. GenZ lookin ass! 👦");
      message.channel.send(embed);
    } else if (randomAge >= 26 && randomAge <= 40) {
      const embed = new MessageEmbed()
        .setTitle("Age")
        .setColor(0x185adb)
        .setDescription("You're " + randomAge + "yrs old. Millennial lookin ass! 👨");
      message.channel.send(embed);
    } else if (randomAge >= 41 && randomAge <= 55) {
      const embed = new MessageEmbed()
        .setTitle("Age")
        .setColor(0x185adb)
        .setDescription("You're " + randomAge + "yrs old. GenX lookin ass! 🧓");
      message.channel.send(embed);
    } else {
      const embed = new MessageEmbed()
        .setTitle("Age")
        .setColor(0x185adb)
        .setDescription("You're " + randomAge + "yrs old. Baby Boomer lookin ass! 🎅");
    }
  }
});

client.on("message", (message) => {
  // server details
  if (message.content === PREFIX + "serverinfo") {
    const embed = new MessageEmbed()
      .setTitle("Server Info")
      .setColor(0x3d84b8)
      .setDescription(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    message.channel.send(embed);
  }
})

// send gif
client.on("message", async (message) => {

  let tokens = message.content.split(" ");
  if (tokens[0] === PREFIX + "gif") {

    let keywords = "dance";

    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }

    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length)
    message.channel.send(json.results[index].url);
    message.channel.send(`Requested by ${message.author}`);
  }
})

// Reddit meme gifs using api
client.on("message", async (message) => {

  if (message.content === PREFIX + "meme") {
    const embed = new MessageEmbed()
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`${memeTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(memeImage)
      embed.setColor(0x3d84b8)
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
      message.channel.send(embed);
    })
  }

})

// NSFW pornhub GIF
client.on("message", (message) => {

});


// CMD_HELP_LIST
client.on("message", (message) => {
  if (message.content === PREFIX + "help") {
    message.channel.send({
      embed: {

        title: "Commands list",
        color: "0x3d84b8",
        fields: [{
            name: "$serverinfo",
            value: "server name and number of members as per the count",
            inline: true
          },
          {
            name: "$rank",
            value: "shows the current rank of user"
          },
          {
            name: "$av",
            value: "access to the pfp of user who used the cmd"
          },
          {
            name: "$gif <`keyword`>",
            value: "sends the requested gif"
          },
          {
            name: "$meme",
            value: "random meme from r/memes"
          },
          {
            name: "$pp",
            value: "random dick size"
          },
          {
            name: "$ok",
            value: "logs ok back"
          },
          {
            name: "$age",
            value: "logs random age with a message"
          },
          {
            name: "$boop/beep",
            value: "logs back beep/boop"
          },
          {
            name: "$ping/pong",
            value: "logs back pong/ping"
          },
          {
            name: "$dumb",
            value: "dumb rate calculator"
          },
          {
            name: "$kick <userID>",
            value: "`only for moderation team` kicks the user"
          },
          {
            name: "$ban <userID>",
            value: "`only for moderation team` bans the user"
          }

        ]
      }
    })
  }
})

// rank and leaderboard
client.on("message", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const randomXp = Math.floor(Math.random() * 9) + 1;
  const hasLeveledXp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);

  if (hasLeveledXp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    const embed = new MessageEmbed()
      .setTitle("Leveling Up!")
      .setColor(0x3d84b8)
      .setDescription(`${message.author} leveled up to **${user.level}**! Keep it going!`);
    message.channel.send(embed);
  }

  if (message.content === PREFIX + "rank") {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    const embed = new MessageEmbed()
      .setTitle("Level")
      .setColor(0x3d84b8)
      .setDescription(`${message.author} is currently level **${user.level}**!`);
    message.channel.send(embed);
  }

  // leaderboard and stats. might implement later
  // if(message.content === PREFIX + "leaderboard" || PREFIX + "lb") {
  //   const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
  //   if(rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

  //   const leaderboard = Levels.computeLeaderboard(client, rawLeaderboard);
  //   const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

  //   message.channel.send(`${lb.join("\n\n")}`);
  // }


})

















// add/remove roles on reaction
// client.on("messageReactionAdd", (reaction, user) => {
//   const { name } = reaction.emoji;
//   const member = reaction.message.guild.members.cache.get(user.id);
//   if (reaction.message.id === "846264542488428554") {
//     switch (name) {
//       case "🍎":
//         member.roles.add('846257573087019009');
//         break;
//       case "🍌":
//           member.roles.add('846257620649377794');
//         break;
//       case "🍇":
//           member.roles.add('846257651423772712');
//         break;
//       case "🍑":
//           member.roles.add('846257681978228736');
//         break;
//     }
//   }
// });

// client.on("messageReactionRemove", (reaction, user) => {
//     const { name } = reaction.emoji;
//     const member = reaction.message.guild.members.cache.get(user.id);
//     if (reaction.message.id === "846264542488428554") {
//       switch (name) {
//         case "🍎":
//           member.roles.remove('846257573087019009');
//           break;
//         case "🍌":
//             member.roles.remove('846257620649377794');
//           break;
//         case "🍇":
//             member.roles.remove('846257651423772712');
//           break;
//         case "🍑":
//             member.roles.remove('846257681978228736');
//           break;
//       }
//     }
//   });

client.login(process.env.DISCORDJS_BOT_TOKEN);
