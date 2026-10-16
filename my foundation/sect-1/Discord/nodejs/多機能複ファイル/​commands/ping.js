module.exports = {
  name: 'ping', // コマンドの名前
  execute(message) {
    message.reply('Pong! (別ファイルから返信)');
  },
};
