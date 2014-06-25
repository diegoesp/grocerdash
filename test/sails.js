before(function(done) 
{
  // Lift Sails and store the app reference
  require('sails').lift(
  {
    // turn down the log level so we can view the test results
    log:
    {
      level: 'error'
    },

  }, function(err, sails)
    {
    // export properties for upcoming tests with supertest.js
    sails.localAppURL = localAppURL = ( sails.usingSSL ? 'https' : 'http' ) + '://' + sails.config.host + ':' + sails.config.port + '';
    // save reference for teardown function
    done(err);
    });
});

// After Function
after(function(done) 
{
  sails.lower(done);
});

// Delete all data after each test
afterEach(function(done) 
{
  /*
  Grocery.query("DELETE FROM Grocery");
  HouseAccount.query("DELETE FROM HouseAccount");
  House.query("DELETE FROM House");
  Account.query("DELETE FROM Account");
  */

  done();
});