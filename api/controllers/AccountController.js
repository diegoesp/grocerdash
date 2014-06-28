ControllerHelper = require("./ControllerHelper");

/**
 * AccountController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = 
{
  create: function(req, res)
  {
  	Account.create(req.body, function(err, account)
    {
    	if (err)
    	{
        ControllerHelper.raiseError(res, err);
    	}
    	else
    	{
    		ControllerHelper.respond(res, account);
    	}
    });		
  }
  
};
