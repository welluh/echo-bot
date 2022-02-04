const { config } = require('dotenv');
const { App } = require('@slack/bolt');
const { registerCommands } = require('./src/commands');
const { registerEvents } = require('./src/events');
const { registerMessages } = require('./src/messages');

config();

const app = new App({
    token: process.env.SLACK_API_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
    port: process.env.PORT,
});

registerCommands(app);
registerEvents(app);
registerMessages(app);

(async () => {
    await app.start();
    console.info('⚡️ Bolt app is running!');
})();
