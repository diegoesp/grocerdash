var should = require("chai").should();
var Factory = require("../factory");

describe('Grocery', function(done) {

  it("should be able to create", function(done) 
  {
    Account.create(new Factory().account(), function(err, account)
    {
      Grocery.create(new Factory().grocery(account), function(err, grocery)
      {
        should.not.exist(err);
        should.exist(grocery);
        done();
      });
    })
  })

});