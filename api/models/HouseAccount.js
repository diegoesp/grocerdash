/**
 * HouseAccount
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = 
{

  attributes: 
  {
  	houseId:
  	{
  		type: "integer",
  		required: "true"
  	},
  	accountId:
  	{
  		type: "integer",
  		required: "true"
  	}
  }

};
