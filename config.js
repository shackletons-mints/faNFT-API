const dotenv = require('dotenv');

const result = dotenv.config();
const envs = result.parsed;

module.exports = envs;