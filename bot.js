const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("546055617010204704")
setInterval(function() {
channel.send(`**The_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSSThe_1BOSS** ,`);
}, 30)
})

client.on('message', message => {
 if(message.author.id !== "489069393305665568" )return;

let command = "1say"

if (!message.content.startsWith(command) || message.author.bot ) return;
const args = message.content.slice(command.length).split(/ +/g).join(" ");
var array = [`${args}`];
var str = array.join(' ');
if (message.content.startsWith(command)) {
message.channel.send(`${args}`);
}
  
});
client.login(process.env.BOT_TOKEN);
