/*
var beerDb = [
                {   "beer_id":  0, 
                    "beername": "CarlsbergCarlsbergCarlsberg Carlsberg",
                    "beerprice":    15, 
                    "img": "" },
                {   "beer_id":  1, 
                    "beername": "Heiniken",
                    "beerprice":    20, 
                    "img": "" },
                {   "beer_id":  2 , 
                    "beername": "Falcon",
                    "beerprice":    30, 
                    "img":  ""  }
                
            ];
*/


   


//alert(beerDb[0].beerprice);
var orderedItems = [];

//--------------------------------- System Function

    function initiateBeerAdding()
    {
        //alert("init");
        addDataFromDB();
        var tmp = document.getElementById("middle");       
        //console.log(tmp);
        //alert(beerDb[0].beer_id);
        /*  
        for (var i=0; i <beerDb.length; i++)
        {
            var tmpCompo = document.createElement("div");
            var name = document.createElement("p");
            name.innerHTML = beerDb[i].beername;
            var price = document.createElement("p");
            price.innerHTML = beerDb[i].beerprice;
            var img = document.createElement("img");
            img.setAttribute("src","#");
            tmpCompo.appendChild(name);
            tmpCompo.appendChild(price);
            tmpCompo.appendChild(img);
            var button = document.createElement("button");
            button.setAttribute("onclick", "addToList(" + beerDb[i].beer_id + ")");
            alert(beerDb[i].beer_id);
            button.innerHTML = "Buy";
            tmpCompo.appendChild(button);
            tmp.appendChild(tmpCompo);
        }    
    */
    }
    function minus_(input){
        // Get element of the order-list side and display a beer_id, in this region. 
        var tmp = document.getElementById("order-list");
        
        var idx = GetIndexOrderedContain(input);

        if(idx == -1)
            orderedItems.push({ beer_id: beer_id, amount: 1});
        else
            orderedItems[idx].amount--;

        if(orderedItems[idx].amount == 0)
            orderedItems.splice(idx, 1);

        tmp.innerHTML = "";
        for(var i = 0; i < orderedItems.length; i++)
        
        {

            //dispaying stuff in the list
            var beerid = document.createElement("li");

            beerid.innerHTML = "<input class='clear-btn' id='clear"+i+"' type='button' value='X' onclick='clear_("+ orderedItems[i].beer_id + ")'/>" + beerDb[orderedItems[i].beer_id].beername + "  " + orderedItems[i].amount + "st" + "<input type='button' value='+' onclick='addToList("+ orderedItems[i].beer_id + ")'/><input type='button' value='-' onclick='minus_("+ orderedItems[i].beer_id + ")' />";

            tmp.appendChild(beerid);


        }
        total();
    }

    function clear_(input){
        // Get element of the order-list side and display a beer_id, in this region. 
        var tmp = document.getElementById("order-list");
        
        var idx = GetIndexOrderedContain(input);

        if(idx == -1)
            orderedItems.push({ beer_id: beer_id, amount: 1});
        else
            orderedItems[idx].amount--;

        if(orderedItems[idx].amount > 0)
            orderedItems.splice(idx, 1);

        tmp.innerHTML = "";
        for(var i = 0; i < orderedItems.length; i++)
        
        {

            //dispaying stuff in the list
            var beerid = document.createElement("li");

            beerid.innerHTML = "<input class='clear-btn' id='clear"+i+"' type='button' value='X' onclick='clear_("+ orderedItems[i].beer_id + ")'/>" + beerDb[orderedItems[i].beer_id].beername + "  " + orderedItems[i].amount + "st" + "<input type='button' value='+' onclick='addToList("+ orderedItems[i].beer_id + ")'/><input type='button' value='-' onclick='minus_("+ orderedItems[i].beer_id + ")' />";

            tmp.appendChild(beerid);


        }
        total();
    }

    function total(){

    var totalCost = 0;
    for(var i = 0; i < orderedItems.length; i++)
    totalCost += beerDb[orderedItems[i].beer_id].beerprice * orderedItems[i].amount;

    // console.log('Total: ' + totalCost);

    var showprice = document.getElementById("totalprice");
    showprice.innerHTML = totalCost + ' kr';

    }

    function addToList(beer_id)
    {
        //alert(this.id);
        // Get element of the order-list side and display a beer_id, in this region. 
        var tmp = document.getElementById("order-list");
        alert("add id"+beer_id);
        var idx = GetIndexOrderedContain(beer_id);

        
        if(idx == -1)
            orderedItems.push({ beer_id: beer_id, amount: 1});
        else
            orderedItems[idx].amount++;

        tmp.innerHTML = "";
        //alert(beerDb[orderedItems[i].beer_id].beername );
        for(var i = 0; i < orderedItems.length; i++)
        
        {

            //dispaying stuff in the list
            var beerid = document.createElement("li");
            //console.log("<input type='button' value='X' onclick='clear_("+ orderedItems[i].beer_id + ")'/>" + beerDb[orderedItems[i].beer_id].beername + "  " + orderedItems[i].amount + "st" + "<input type='button' value='+' onclick='addToList("+ orderedItems[i].beer_id + ")'/><input type='button' value='-' onclick='minus_("+ orderedItems[i].beer_id + ")'/>");
            //beerDb[orderedItems[i].beer_id].beername
            beerid.innerHTML = "<input class='clear-btn' id='clear"+i+"' type='button' value='X' onclick='clear_("
                                                                                + orderedItems[i].beer_id
                                                                                + ")'/>" 
                                                                                + ""
                                                                                ; 
            
            console.log("HORA" + orderedItems[i].beer_id);
            tmp.appendChild(beerid);

           
        }
        
        //total();
    }

/* 
+ "  " 
                                                                                + orderedItems[i].amount
                                                                                + "st" 
                                                                                + "<input type='button' value='+' onclick='addToList("
                                                                                + orderedItems[i].beer_id 
                                                                                + ")'/><input type='button' value='-' onclick='minus_("
                                                                                + orderedItems[i].beer_id 
                                                                                + ")'/>"
*/
    


    function GetIndexOrderedContain(input)
    {
        alert(input);
        var idx = -1;
        for(var i = 0; i < orderedItems.length; i++)
            
            if(orderedItems[i].beer_id == input)
                {
                    idx = i;
                    break;
                }

        return idx;

    }
