'use strict';

const cwd = process.cwd();
const config = {}

config[ `${cwd}/tests/utils.js` ] = {
	'bemquery-core': `${cwd}/tests/support/mocks/bemquery-core.js`
};

module.exports = config;