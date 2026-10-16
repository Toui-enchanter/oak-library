my-bot/
├── .env
├── package.json
├── handler.js    【新設】機能をまとめる司令塔ファイル
├── commands/     【新設】個別機能の置き場所
│   └── ping.js   個別の機能（例: pingコマンド）
└── index.js      最低限の土台（これ以上ほとんど汚さない）
