/**
 * Grocery
 *
 * @module      :: Model
 * @description :: Groceries to be bought
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = 
{
  attributes: 
  {
  	name:
  	{
  		type: "string",
  		required: "true"
  	},
  	createdByAccountId:
  	{
  		type: "integer",
  		required: "true"
  	},
  	boughtByAccountId: "integer",
  	boughtOnDatetime: "datetime",
  	comments: "string"
  }
};