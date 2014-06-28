var should = require("chai").should();
var Factory = require("../factory");

describe('Account', function(done) {

  it("should be able to create", function(done) 
  {
    Account.create(new Factory().account(), function(err, account) 
    {
    	should.not.exist(err);
    	should.exist(account);
      done();
    });
  }),

  it ("should require the e-mail", function(done) 
  {
  	var accountData = new Factory().account();
  	accountData.email = null;
  	Account.create(accountData, function(err, account) {
  		should.exist(err);
  		done();
  	});
  }),

  it ("should login", function(done) 
  {
    var accountData = new Factory().account();
    Account.create(accountData, function(err, account) {
      account.login(accountData.password).should.be.ok
      done();
    });
  }),

  it ("should not login if password is wrong", function(done) 
  {
    var accountData = new Factory().account();
    Account.create(accountData, function(err, account) {
      account.login("fake pass").should.not.be.ok
      done();
    });
  })
});