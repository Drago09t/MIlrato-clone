const {MessageEmbed} =require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "developer",
	category: "🤖 Information Commands",
  aliases: ["dev", "tomato"],
  description: "Shows Information about the Developer",
  useage: "developer",
  run: async (client, message, args) => {
	const embed = new MessageEmbed()
	.setColor(config.colors.yes)
	.setFooter("Milrato | Sponsor: Bittmax.de | Code  'x10'  == -5%", config.AVATARURL)
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/17ccf170d62e5e0040660d003b075528.webp")
  .setTitle("Tomato#6966 | Dev of 3 Orgs | Developer of 200+ BOTS")
  .setURL("https://musicium.eu")
  .setDescription(`
> Hello I am **Tomato** <@442355791412854784> *(\`Tomato#6966\`)*, and i made more then 200 different Discord Bots: [My Bot List](https://bots.musicium.eu)

> I am very proud for all of my verified and not verified Discord Bots, but the Bot I am the most proud of is: [**Musicium** | \`Ultimate Music experience\`](https://musicium.eu) <@769642999227351070>
  
> I made this Bot, and you can get a free Bot too! Just go to: [My Service](https://milrato)

> I am also a **Website** Developer and **Plugin** dev. I made **Modules** like a **SPEECH Module** [SEE IT](https://cdn.discordapp.com/attachments/778714123785076768/801606374105546782/2021-01-21_01-15-50.mp4)

> Yeah i hope you like my stuff :v: <3

`)
	message.channel.send(embed).catch(error => console.log(error));
}
}