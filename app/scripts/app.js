/*global define */
define([], function () {
    'use strict';
    
    $(document).ready(function() {
    $(".button").bind('click', $.proxy(function() {
        var status = $(this).attr('id');
        console.log(ThisId)
        if ( thisId === "red") {
        alert(status);
	}else if ( thisId === "blue"){
	
	}else if ( thisId === "yellow"){
	
	}else if ( thisId === "green"){
		
	} else {
		console.log("Fail!")
	}	
    
});​
    
    return 1;
});
