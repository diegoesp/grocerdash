var should = require("chai").should();
var Factory = require("../factory");

describe('HouseAccount', function(done) {

  it("should be able to create", function(done)
  {
    var factory = new Factory();

    House.create(factory.house(), function(err, house) {
      Account.create(factory.account(), function(err, account) {
        HouseAccount.create(factory.houseAccount(house, account), function(err, houseAccount) {
          should.not.exist(err);
          should.exist(houseAccount);
          done();
        })
      })
    });
  }),

  it("should require the house", function(done) 
  {
    var factory = new Factory();

    Account.create(factory.account(), function(err, account) {
      HouseAccount.create(factory.houseAccount(null, account), function(err, houseAccount) {
        should.exist(err);
        done();
      })
    })
  })
});