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

module.exports = Factory;