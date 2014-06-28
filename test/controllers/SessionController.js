var should = require("chai").should();
var Factory = require("../factory");
var request = require('supertest');

describe('SessionController', function(done) 
{
  it(".create should create my session", function(done)
  {
    var factory = new Factory();
    var accountData = factory.account();

    Account.create(accountData, function(err, account) {
      request.agent(sails.express.app)
      .post('/api/session/create')
      .send({ email: accountData.email, password: accountData.password })
      .end(function(err, res)
      {
        res.ok.should.be.ok
        var json = JSON.parse(res.text);
        json.email.should.be.equal(accountData.email);
        done();
      });
    })
  }),

  it(".create should reject me if user does not exists", function(done)
  {
    request.agent(sails.express.app)
    .post('/api/session/create')
    .send({ email: "xy", password: "zz" })
    .end(function(err, res)
    {
      res.ok.should.not.be.ok
      var json = JSON.parse(res.text);
      json.should.contain("Email does not")
      done();
    });
  }),

  it(".show should return my session", function(done)
  {
    var factory = new Factory();
    var accountData = factory.account();

    // Create the account
    Account.create(accountData, function(err, account) 
    {
      // Login
      request.agent(sails.express.app)
      .post('/api/session/create')
      .send({ email: accountData.email, password: accountData.password })
      .end(function(err, res)
      {
        // Check session
        var agent = request.agent(sails.express.app);
        // Attach the cookies
        agent.saveCookies(res);
        agent.get('/api/session/show')
        .end(function(err, res)
        {
          // Got the session ?
          res.ok.should.be.ok
          var json = JSON.parse(res.text);
          json.email.should.be.equal(accountData.email);
          done();
        });
      });
    })
  })

});