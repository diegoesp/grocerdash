var should = require("chai").should();
var Factory = require("../factory");

describe('House', function(done) {

  it("should be able to create", function(done) 
  {
    House.create(new Factory().house(), function(err, account) 
    {
    	should.not.exist(err);
    	should.exist(account);
      done();
    });
  }),

  it("should require the name", function(done) 
  {
    var houseData = new Factory().house();
    houseData.name = null;
    House.create(houseData, function(err, account) 
    {
      should.exist(err);
      done();
    });
  })
});