var Factory = function()
{
}

Factory.prototype.account = function()
{
	return {email: "test@localhost.com", firstName: "Carolina", lastName: "Mazziotti", password: "password"};
}

Factory.prototype.grocery = function(createdByAccount)
{
	return {name: "Apples", createdByAccountId: createdByAccount.id, comments: "These are the comments"};
}

Factory.prototype.house = function()
{
	return {name: "Frias 256"};
}

Factory.prototype.houseAccount = function(house, account)
{
	var houseId = null;
	if (house !== null) houseId = house.id;

	var accountId = null;
	if (account !== null) accountId = account.id;
	
	return {name: "Apples", houseId: houseId, accountId: accountId};
}

module.exports = Factory;