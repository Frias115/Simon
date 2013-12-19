/*global define */
define([], function () {
    'use strict';
    var userPlaying = false
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
		  
		  
	 var showSequence = function() {
        var seq = randomArray
        for(var id in seq) {
           (function(id){
             setTimeout( function() {
               highlight($("#"+seq[id]), "#fff")
             }, 600*id)
           })(id)
        }
        setTimeout( function() {
            userPlaying = true
        }, 600*seq.length)
    }
    
    
     var initialize = function() {
        colors = jQuery.map( $(".button"),
                       function(element) {
                         return $(element).attr('id')
                       })
    }
	
	
	var generateRandomArray = function () {
		randomArray.push( colors[Math.floor(Math.random() * colors.length)] );
	}
	
	
	var compareSequences = function (){
		for ( var i=0; i <= randomArray.length; i++){
			if (myArray[i] !== randomArray[i]){
				return false
			}
		}
		return true
	}
		
	
	
	var endGame = function (){
		var tryagain = confirm( "Error!. Do you wish to restart?")
		if (tryagain) {
			myArray.length = 0;
			randomArray.length = 0;
			setTimeout( function() {
                generateRandomArray()
                showSequence()
            }, 2000)
		}
	}
		

    $(document).ready(function() {
        initialize()

        generateRandomArray()
        showSequence()
        
        

        $('.button').click( function() {
			console.log (myArray);
			console.log (randomArray);
            if(userPlaying) {
                var thisId = $(this).attr('id')
                highlight($(this), "#fff")
                myArray.push(thisId)

                if (myArray.length >= randomArray.length) {
                    userPlaying = false
                    if (compareSequences()){
                    myArray.length = 0
                    setTimeout(function() {
                        generateRandomArray()
                        showSequence()
                    }, 1000)
				    }else {
					endGame()
					}
				}
			}
		
		
		
		
		
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
})
    
    return 1;
});
