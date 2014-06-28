ControllerHelper = require("./ControllerHelper");

/**
 * SessionController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = 
{
  // Logs a user in
  create: function(req, res)
  {
    var email = req.param("email");
    var password = req.param("password");

    Account.findOne({ email: email }).done(function (err, account) {
      if (account === undefined)
      {
        ControllerHelper.raiseError(res, "Email does not exist");
      }
      else
      {
        if (account.login(password))
        {
          // Set session
          req.session.account = account;
          // Return the user
          ControllerHelper.respond(res, account);
        }
        else
        {
          ControllerHelper.raiseError(res, "Password is invalid");
        }
      }
    });
  },

  // Returns the session
  show: function(req, res)
  {
    var account = req.session.account;
    if (account === undefined || account === null) 
      ControllerHelper.raiseError(res, "User is not logged in");
    else
      ControllerHelper.respond(res, account);
  }
}