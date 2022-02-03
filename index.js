const { config } = require('dotenv');
const { App } = require('@slack/bolt');
config();

const { registerCommands } = require('./src/commands');

const app = new App({
    token: process.env.SLACK_API_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
    port: process.env.PORT,
});

registerCommands(app);

(async () => {
    await app.start();
    console.log('⚡️ Bolt app is running!');
})();
