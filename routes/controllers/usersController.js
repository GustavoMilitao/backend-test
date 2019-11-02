'use strict';
const axios = require('axios'),
    githubUsersRoute = `${process.env.githubAPIAddress}/users`,
    parse = require('parse-link-header');
exports.getUsersBySincePagination = function (req, res) {
    axios.get(`${githubUsersRoute}`, { params: { since: req.query.since } })
        .then(response => {
            res.send({ users: response.data, next: parse(response.headers.link).next });
        })
        .catch(error => {
            res.status(error.status).send(error.data);
        });
};

exports.getUserDetails = function (req, res) {
    axios.get(`${githubUsersRoute}/${req.params.username}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.status(error.status).send(error.data);
        });
};

exports.getUserRepositories = function (req, res) {
    axios.get(`${githubUsersRoute}/${req.params.username}/repos`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.status(400).send(error.message);
        });
};