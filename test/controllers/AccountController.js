var should = require("chai").should();
var Factory = require("../factory");
var request = require('supertest');

describe('Account', function(done) 
{
  it(".create should create an account", function(done)
  {
    var factory = new Factory();

    request.agent(sails.express.app)
    .post('/api/account/create')
    .send(factory.account())
    .end(function(err, res)
    {
      res.ok.should.be.true
      done();
    });
  }),

  it(".create should report an error when creating a user without an email", function(done)
  {
    var factory = new Factory();
    var accountData = factory.account();
    accountData.email = null;

    request.agent(sails.express.app)
    .post('/api/account/create')
    .send(accountData)
    .end(function(err, res)
    {
      res.ok.should.be.false
      res.text.should.contain("should be a email");
      done();
    });
  })
});