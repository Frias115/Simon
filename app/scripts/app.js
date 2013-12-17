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
	 var showSequence = function(seq) {
       for(var id in seq) {
          //highlight($("#"+seq[id]), "#fff", 600*id)
          (function(id){
            setTimeout( function() {
              highlight($("#"+seq[id]), "#fff")
            }, 600*id)
          })(id)
       }
    }
    
    var initialize = function (bleh){
		bleh.push( colors[Math.floor(Math.random() * colors.length)] );
	}
	
	var generateRandomArray = function (bleh) {
		bleh.push( colors[Math.floor(Math.random() * colors.length)] );
	}
	
	var showRandomArray = function (bleh) {
		showSequence (bleh);
	}
	
	var userArray = function (bloh) {
		$(".button").click( function(){
			console.log(thisId)
			var thisId = $(this).attr('id')
			
			if ( thisId === "red") {
				bloh.push (thisId);
				highlight ($(this) , "#ff0000");
			
			}else if ( thisId === "blue"){
				bloh.push (thisId);
				highlight ($(this) , "#00BFFF");
			
			}else if ( thisId === "yellow"){
				bloh.push (thisId);
				highlight ($(this) , "#FFFF00");
		    
		    }else if ( thisId === "green"){
				bloh.push (thisId);
				highlight ($(this) , "#40FF00");
			} else {
				console.log("Fail!")
		}
		console.log (myArray);
		console.log (randomArray);
		})
	}

	var compareSequences = function (){
		if (randomArray === myArray){
			true
		}
		else{
			false
		}
		
	}
	
	var endGame = function (){
		
	}
		

    $(document).ready(function() {
		initialize( randomArray )
		while (true) {
			generateRandomArray( randomArray)
			showRandomArray(randomArray)
			
			$(".button").click( function(){
				if(userPlaying){
					
				}
			})
			userArray(myArray)
			if (!compareSequences()){
				break;
			}
		}
		endGame()
		/*
        $(".button").click( function(){
			randomArray.push( colors[Math.floor(Math.random() * colors.length)] );
			showSequence( randomArray )
			console.log(thisId)
			var thisId = $(this).attr('id')
        
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
	
	for(var i = 0; i < randomArray.length; i++){
				randomArray[i]
				if (randomArray[i] === "red"){
					highlight ($(red) , "#ff0000");
					
				}
				else if (randomArray[i] === "blue"){
					highlight ($(blue) , "#00BFFF");
					
					}
				else if (randomArray[i] === "yellow"){
					highlight ($(yellow) , "#FFFF00");
					
				}
				else if (randomArray[i] === "green"){
					highlight ($(green) , "#40FF00");
					
				}
				else{}
			}
			
	})*/
})
    
    return 1;
});
