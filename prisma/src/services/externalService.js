const gotClient = require('../clients/gotClient');

const externalService = {
  getData: async () => {
    const response = await gotClient.get('http://localhost:4000/companion-data');
    return response;
  }
};

module.exports = externalService;
