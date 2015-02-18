var assert = require('assert');
var SailsApp = require('sails').Sails;

describe('sails-odata', function () {
  var app = new SailsApp();
  var config = {
    hooks: {
      grunt: false
    },
    //log: { level: 'warn' }
  };

  before(function (done) {
    this.timeout(30000);
    app.lift(config, function (error, _sails) {
      if (error) {
        sails.log.error(error);
        return done(error);
      }
      sails = _sails;
      done();
    });
  });

  describe('ODataService', function () {
    it('should exist', function () {
      assert.ok(sails.services.odataservice);
      assert.ok(global.ODataService);
    });
  });

});
