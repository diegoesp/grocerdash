var ControllerHelper = 
{
	raiseError: function(res, error)
	{
		res.json(error, 500);
	},

	respond: function(res, object)
	{
		res.json(object, 200);
	}
}

module.exports = ControllerHelper;