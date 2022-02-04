function registerMessages(app) {
    require('./messages')(app);
}

module.exports = {
    registerMessages,
};
