/*global define */
define([], function () {
    'use strict';
    var userPlaying = false
    var myArray = new Array();
    var randomArray = new Array();
    var colors = ["red", "blue", "yellow", "green"];
    var maxLevel = 0;
    var newMaxLevel;
    
    //Illuminates buttons
    var highlight = function(button,color){
		var oldColor = button.css("background-color")
		button.css("background-color" , color).dequeue()
		      .delay (300)
		      .queue( function() {
				  button.css("background-color", oldColor).dequeue();
			  })
		  }
		  
	//Show random generate sequence	  
	var showSequence = function() {
        var seq = randomArray
        
        if ( randomArray.length < 1) {
			$("#level").html("Level 1 ")
		}
		else {
			$("#level").html("Level " + randomArray.length)
		}
        for(var id in seq) {
           (function(id){
             setTimeout( function() {
				 
			   if(seq[id] === 'red'){
					highlight($("#"+seq[id]), '#FF0000')
				} else if (seq[id] === 'blue'){
					highlight ($("#"+seq[id]), '#00BFFF')
				} else if (seq[id] === 'green'){
					highlight ($("#"+seq[id]), '#40FF00')
				} else if (seq[id] === 'yellow'){
					highlight ($("#"+seq[id]), '#FFFF00')
				}
				}, 600*id)
           })(id)
        }
        setTimeout( function() {
            userPlaying = true
        }, 600*seq.length)
    }
    
    //Start game
     var initialize = function() {
        colors = jQuery.map( $(".button"),
                       function(element) {
                         return $(element).attr('id')
                       })
    }
	
	//Generate random sequence
	var generateRandomArray = function () {
		randomArray.push( colors[Math.floor(Math.random() * colors.length)] );
	}
	
	//Compare random sequence with user sequence
	var compareSequences = function (){
		for (var i in myArray){
			if (myArray[i] !== randomArray[i]){
				return false
			}
		}
		return true
	}
		
	//Restart button and end button
	var endGame = function (){
		var tryagain = confirm( "Error!. Do you wish to restart?")
		if (tryagain) {
			newMaxLevel = randomArray.length - 1;
			if (newMaxLevel >= maxLevel){
			  maxLevel = newMaxLevel
			  $("#maxlevel").html("Highest level: " + maxLevel)
		    }
			else {
			  $("#maxlevel").html("Highest level: " + maxLevel)
		    } 
		     
			myArray.length = 0;
			randomArray.length = 0;
			
            setTimeout( function() {
                showSequence()
            }, 1500)
            }
		else {
			document.location.reload()
		}
	}
		
    //Main
    $(document).ready(function() {
        initialize()
        
        //Show start button
        $('#start').click(function() {
            $(this).css('color', '#fff').fadeOut()
            setTimeout( function() {
				$("#level").html("Level 1");
                generateRandomArray()
                showSequence()
            }, 500)
        })
        
        
        //The game (You lose it)
        $('.button').click( function() {
			console.log (myArray);
			console.log (randomArray);
            if(userPlaying) {
                var thisId = $(this).attr('id')
                
                if(thisId === 'red'){
					highlight($(this), '#FF0000')
				} else if (thisId === 'blue'){
					highlight ($(this), '#00BFFF')
				} else if (thisId === 'green'){
					highlight ($(this), '#40FF00')
				} else if (thisId === 'yellow'){
					highlight ($(this), '#FFFF00')
				}
			    
			    myArray.push(thisId)
                
                if (!compareSequences()) {
                    userPlaying = false
                    endGame()
                }
                
                if (myArray.length >= randomArray.length) {
                    userPlaying = false
                    myArray.length = 0
                    setTimeout(function() {
                        generateRandomArray()
                        showSequence()
                    }, 1000)
                  }
               }
           })
		})
    
    return 1;
});
