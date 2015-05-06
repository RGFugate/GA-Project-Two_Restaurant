////////////////////////////
// Restaurants Empire APP //
////////////////////////////

console.log("Server Linked");

//read
//GET restaurant names from json.  Put names to mustache template and contain within a button.


	
$.ajax ({
	type: "GET",
	url: "/restaurants",
	success: function(data) {
		$.each(data, function(i, items) {
			var $list = $("#list");
			//var template = $("#btn_template").text();
			var template = "<details><summary>{{name}}</summary><a>MENU</a><a>INFO</a><a>EDIT</a></details>";
			var html = Mustache.render(template, data[i].name);
				
			//$list.append(data[i].name)
			$list.append(html);
		})
	}
})


/*$(function() {
	
	var $list = $("#list");
	var template = $('script[data-id="btn_template"]').text();
	$.ajax ({
		type: "GET",
		url: "/restaurants",
		success: function(data) {
			$.each(data, function(i, items) {
				//$list.append("<h3>" +data[i].name+ "<h3>");
				//console.log("it worked");
				//var restName = (data[i].name)
				//var name = Mustache.render(template, data[i}.name)
				$list.append(template)
			})
		}
	})
});

//read
//GET restaurant list and populate the "List" div with Rest buttons.
/*
var template = $("script [data-id='btn_template']").text();
$("#populate").on("click", function() {
	
	$.ajax ({
		type: "GET",
		url: "/restaurants"
	}).done (function(restaurants) {
		//console.log("working")
		var listItems = [];

		$.each(restaurant, function(items) {
			var output = Mustache.render(template, items);
			listItems.push(output.name);
		})
		
		$('#list').append(listItems);
	})
});
*/
//read
//Another attempt at GET list for LIST div.
/*
$.getJSON("./restaurant_db.json", function data) {
	var template = $('script[data-id="btn_template"]').text();
	var replace = Mustache.render(template, data);
	$("#list").html(replace);
}
*/



//create
//Create new restaurant and POST to json.
/*
$("#create").on("click", function() {
	
	var $body = $('body');
	var newTemp = $('script[data-id="addNewTemp"]').text();
	
	$body.on('click', '#create', function(){
  		var $content = $("#content");
  		
  		$content.empty();

  		console.log("erased");
  	
  		$.ajax ({
  			type: "POST",
  			url: "/restaurants",
  			data: newTemp,
  		  	success: function(data) {

  				$content.append("<h1>" +$addNewTemp+ "</h1>");
  			};
  		});
  	});
});
*/

//update or patch
//delete


///////////
// Items //
///////////

//create
//read
//update
//delete








