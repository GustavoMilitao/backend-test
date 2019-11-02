'use strict';
const express = require('express');
const router = express.Router();
module.exports = function (app) {
    var controller = require('./controllers/usersController');

    router.get('/users', controller.getUsersBySincePagination);
    router.get('/users/:username/details', controller.getUserDetails);
    router.get('/users/:username/repos', controller.getUserRepositories);
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use('/api', router)
};