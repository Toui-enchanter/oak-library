const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

function setupCommands(client) {
  // コマンドを格納する箱を作る
  client.commands = new Collection();

  // commandsフォルダのパスを取得
  const commandsPath = path.join(__dirname, 'commands');
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  // フォルダ内のファイルを順番に読み込む
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    // コマンドの箱に登録する
    if ('name' in command && 'execute' in command) {
      client.commands.set(command.name, command);
      console.log(`[Loaded] コマンド ${command.name} を読み込みました`);
    }
  }

  // メッセージを受信したときの処理をここで一括管理
  client.on('messageCreate', message => {
    // プレフィックス（例: !）で始まるメッセージを想定
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
      command.execute(message, args); // 読み込んだファイルの execute を実行！
    } catch (error) {
      console.error(error);
      message.reply('コマンド実行中にエラーが発生しました。');
    }
  });
}

module.exports = setupCommands;
