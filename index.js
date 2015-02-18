module.exports = require('sails-generate-entities')({
  module: 'sails-odata',
  id: 'odata-api',
  statics: [
    'api/controllers/ODataController.js',
    'config/odata.js'
  ],
  classes: [
    'api/services/ODataService.js'
  ],
  functions: [
    'api/policies/ODataPolicy.js'
  ]
});
