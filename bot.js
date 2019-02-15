const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("532987248476553216")
setInterval(function() {
channel.send(`**Moataz spam , Moataz spam , Moataz spam , Moataz spam Moataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moatazspam , Moataz, Moataz,Moataz** ,`);
}, 30)
})

client.on('message', message => {
 if(message.author.id !== "414100163448274947" )return;

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
