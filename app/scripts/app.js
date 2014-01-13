/*global define */
define([], function () {
    'use strict';
    var userPlaying = false
    var myArray = new Array();
    var randomArray = new Array();
    var colors = ["red", "blue", "yellow", "green"];
    
    var highlight = function(button,color){
		var oldColor = button.css("background-color")
		button.css("background-color" , color).dequeue()
		      .delay (300)
		      .queue( function() {
				  button.css("background-color", oldColor).dequeue();
			  })
		  }
		  
		  
	 var showSequence = function() {
        var seq = randomArray
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
				
               //highlight($("#"+seq[id]), "#fff")
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
		for (var i in myArray){
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
			$('#Start').click(function() {
            $(this).css('color', '#fff').fadeOut()
            setTimeout( function() {
                generateRandomArray()
                showSequence()
            }, 500)
        })
		}
	}
		

    $(document).ready(function() {
        initialize()
        
        $('#Start').click(function() {
            $(this).css('color', '#fff').fadeOut()
            setTimeout( function() {
                generateRandomArray()
                showSequence()
            }, 500)
        })

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
