var connection = require('../model/dbconnection');

module.exports = function (req,res) {
	var response = [];

	// Make sure required content is provided
	if (
		typeof req.params.id !== 'undefined' &&

	) {
		var id = req.params.id;
		var content = {
			Row_ID: arr[0],
			Order_ID: arr[1],
			Order_Date: arr[2],
			Order_Priority: arr[3],
			Order_Quantity: arr[4],
			Sales: arr[5],
			Discount: arr[6],
			Ship_Mode: arr[7],
			Profit: arr[8],
			Unit_Price: arr[9],
			Shipping_Cost: arr[10],
			Customer_Name: arr[11],
			Province: arr[12],
			Region: arr[13],
			Customer_Segment: arr[14],
			Product_Category: arr[15],
			Product_Sub_Category: arr[16],
			Product_Name: arr[17],
			Product_Container: arr[18],
			Product_Base_Margin: arr[19],
			Ship_Date: arr[20]
		};





		connection.query('UPDATE nd_products SET product_name = ?, product_price = ?, product_image = ? WHERE id = ?',
			[name, price, imageUrl, id],
			function(err, result) {
		  		if (!err){

					if (result.affectedRows != 0) {
						response.push({'result' : 'success'});
					} else {
						response.push({'msg' : 'No Result Found'});
					}

					res.setHeader('Content-Type', 'application/json');
			    	res.status(200).send(JSON.stringify(response));
		  		} else {
				    res.status(400).send(err);
			  	}
			});

	} else {
		response.push({'result' : 'error', 'msg' : 'Please fill required information'});
		res.setHeader('Content-Type', 'application/json');
    res.send(200, JSON.stringify(response));
	}
};
