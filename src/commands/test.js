module.exports = function (app) {
    app.command('/command', async ({
       command,
       ack,
       respond }
    ) => {
        try {
            await ack();
            await respond(`Command initiated ${command.text}`);
        } catch (error) {
            console.error(error);
        }
    });
}
