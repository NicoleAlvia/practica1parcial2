const got = require('got');

const gotClient = {
  get: (url) => got(url).json()
};

module.exports = gotClient;
