const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const config = require("../../config.json")
module.exports = {
  name: "hentaigif",
  category: "🔞 NSFW Commands",
  description: "Sends random hentai gif",
  usage: "hentaigif",
  run: async (client, message, args) => {
 
  //Checks channel for nsfw
  var errMessage = "This is not an NSFW Channel";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.randomHentaiGif());

        const hentaigif = new Discord.MessageEmbed()
        .setTitle("Hentai Gif")
        .setImage(owo.url)
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setURL(owo.url);
        message.channel.send(hentaigif);

}

      work();
}
                };