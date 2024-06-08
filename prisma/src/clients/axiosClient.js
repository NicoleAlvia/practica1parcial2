const axios = require('axios');

const axiosClient = {
  get: (url) => axios.get(url)
};

module.exports = axiosClient;
