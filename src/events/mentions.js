module.exports = function (app) {
    app.event('app_mention', async ({ event, say }) => {
        try {
            await say({
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `Thanks for the mention <@${event.user}>!`
                        },
                    },
                ],
            });
        } catch (error) {
            console.error(error);
        }
    });
}
