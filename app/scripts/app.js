/*global define */
define([], function () {
    'use strict';
    var myArray = new Array();
    var randomArray = new Array();
    var colors = ["red", "blue", "yellow", "green"];
    
    var highlight = function(button,color){
		var oldColor = button.css("background-color")
		button.css("background-color" , color)
		      .delay (200)
		      .queue( function() {
				  button.css("background-color", oldColor).dequeue();
			  })
		  }
		  
    
      $(document).ready(function() {
        $(".button").click( function(){
			randomArray.push( colors[Math.floor(Math.random() * colors.length)] );
             var thisId = $(this).attr('id')
        console.log(thisId)
        if ( thisId === "red") {
			myArray.push (thisId);
			highlight ($(this) , "#ff0000");
			

		}else if ( thisId === "blue"){
			myArray.push (thisId);
			highlight ($(this) , "#00BFFF");
		
			
		}else if ( thisId === "yellow"){
			myArray.push (thisId);
		    highlight ($(this) , "#FFFF00");
		  
		    
		}else if ( thisId === "green"){
			myArray.push (thisId);
			highlight ($(this) , "#40FF00");
			
			
		} else {
		console.log("Fail!")
	}	
	console.log (myArray);
	console.log (randomArray);
	})
})
    
    return 1;
});
