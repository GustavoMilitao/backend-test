'use strict';
const express = require('express');
const router = express.Router();
module.exports = function (app) {
    var controller = require('./controllers/usersController');

    router.get('/users', controller.getUsersBySincePagination);
    router.get('/users/:username/details', controller.getUserDetails);
    router.get('/users/:username/repos', controller.getUserRepositories);
    app.use('/api',router)
};