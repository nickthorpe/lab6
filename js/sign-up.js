//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$(function(){
    //document is now ready for manipulation
    var idx;
	var state;
	var option;
	// getting reference to state select using jQuery function and assigning it to a variable
	var stateSelect = $('select[name="state"]');
	// loop over usStates array to load the State dropdown
	for (idx = 0; idx < usStates.length; ++idx) {
    	state = usStates[idx];
    	//code to create new option element, populate, and append
    	option = $(document.createElement('option'));
        option.attr('value', state.abbreviation);
        option.html(state.name);
        stateSelect.append(option);
	}

	$('.signup-form').submit(function(){
    	//code to execute when the sign-up form is submitted
    	//this is the raw DOM form element
    	//wrap it in a jQuery object so we can use jQuery methods on it
    	var signupForm = $(this);
	    //select a descendant input element with the name "addr-1"
	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    //assigning variable to the length of addr1
	    var addr1Value = addr1Input.val();
	    //assigning variable to determine whether length of addr1 is greater than zero
	    var valid = addr1Value.length > 0;
	    //if test to determine whether or not there is a zip code input when an address is inputed
	    if(valid) {
	    	var zipInput = signupForm.find('input[name="zip"]');
    		var zipValue = zipInput.val();
    		var zipValid = zipValue.length > 0;
    		//if test to determine whether or not there is a zip code when there is a vaild address, need both or neither elements
            if (!zipValid){
            	alert("If you specify an address, you must also list a zip code!");
            	return false;                        
			}
			return valid;	    
	    }
	});

	$('select[name="refer"]').change(function(){
	    //get a ref to the refer select
	    //add the refer-other input
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    //if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	        //remove the disabled attribute from the
	        //refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    }
	    else {	
	        //otherwise, make the refer-other input disabled
	        //and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	}); //refer change function

	//add this at the end of your document ready function
	//goes back to google if you don't want to fill out form
	$('.btn-abandon').click(function(){
	    window.location = 'http://www.google.com';
	});
                    
}); //on document ready 

$('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
    //show the modal confirmation dialog
    //and don't reset window.location until the user clicks
    //the "Yes, Get Me Out of Here!" button
    $('.cancel-signup-modal').modal();
}); //cancel-signup click
