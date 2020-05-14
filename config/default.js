'use strict';
const projectInfo = require('../package.json');
require('dotenv').config();

module.exports = {
    port: 8080,

    databaseHost: process.env.DB_HOST,
    databasePort: process.env.DB_PORT,
    databaseUsername: process.env.DB_USER,
    databasePassword: process.env.DB_PASSWORD,
    databaseName: process.env.DB_NAME,
    dialect: 'postgres',

    staticBasePath: `/`
};
