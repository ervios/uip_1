/* If you go to stock_management.html this is used there, there's no button for it at the moment.*/

var lowStockList = [];

function createBody() {
	var serverAns = httpGet('http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=inventory_get');
	var obj = JSON.parse(serverAns);
	var infoSize = obj.payload.length; 
	var j = 0;
	for(var i = 0; i < infoSize; i++) { //infoSize
		if(obj.payload[i].count != null && obj.payload[i].namn != "" && obj.payload[i].count < 4) {
			lowStockList[j] =  {
								"beer_id":  obj.payload[i].beer_id, 
                        		"beername": obj.payload[i].namn + " "+ obj.payload[i].namn2
                    			};
                    			j++;
			var div = document.createElement('div');
			div.className = "stock-list";	
			div.innerText = "ID: " + obj.payload[i].beer_id + "\t" + "Beverage: " + obj.payload[i].namn + "\t" + "á: " + obj.payload[i].namn2 + "\t" + obj.payload[i].count; 
			document.getElementById("out-of-stock-block").appendChild(div);
		}
	}
//alert(lowStockList);
}


function getStockList() {
	console.log(lowStockList);
	alert(lowStockList[0].beername);
}

