/**
 * Account
 *
 * @module      :: Model
 * @description :: A user for GroceryDash
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = 
{
  attributes: 
  {	
  	email: 
  	{
  		type: "email",
  		required: true
  	},
  	firstName: 
  	{
  	 type: "string",
  	 required: true
  	},
  	lastName: 
  	{
  		type: "string",
  		required: true
  	},
  	password:
  	{
  		type: "string",
  		required: true
  	},

    // Logs in a user
    login: function(password)
    {
      if (password === this.password)
        return true;
      else
        return false;
    }

  },
};