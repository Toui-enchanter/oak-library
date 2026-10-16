require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const setupCommands = require('./handler'); // 👈 先ほどの司令塔を読み込む

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // メッセージ内容を読むために必要
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// 🚀 別ファイルで管理する機能をここでまとめて適用！
setupCommands(client);

client.login(process.env.TOKEN);
