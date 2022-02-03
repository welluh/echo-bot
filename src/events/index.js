function registerEvents(app) {
    require('./mentions')(app);
}

module.exports = {
    registerEvents,
};
