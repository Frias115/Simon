/*global define */
define([], function () {
    'use strict';
    var myArray = new Array();
     
    $(document).ready(function() {
        $(".button").click( function(){
             var thisId = $(this).attr('id')
        console.log(thisId)
        if ( thisId === "red") {
			myArray.push (thisId);
			
		}else if ( thisId === "blue"){
			myArray.push (thisId);
				
		}else if ( thisId === "yellow"){
			myArray.push (thisId);
				
		}else if ( thisId === "green"){
			myArray.push (thisId);
				
		} else {
		console.log("Fail!")
	}	
	console.log (myArray);
	})
})
    
    return 1;
});
