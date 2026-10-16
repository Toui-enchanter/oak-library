require('dotenv').config();//

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

(ココに新しい機能のコードを書く)

client.login(process.env.TOKEN);


