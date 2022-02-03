module.exports = function (app) {
    app.command('/command', async ({
       command,
       ack,
       respond }
    ) => {
        await ack();
        await respond(`Command initiated ${command.text}`);
    });
}
