module.exports = function (app) {
    app.message('', async ({
       say,
       payload,
       context,
   }) => {
        if (payload.text.includes(context.botUserId)) {
            return;
        }

        if (payload.channel_type === 'im') {
            await say({
                text: `Damn you millenials and your gibberish!`
            });
        }
    });
};
