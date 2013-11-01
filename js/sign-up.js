//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$(function(){
    //document is now ready for manipulation
    var idx;
	var state;
	var option;
	var stateSelect = $('select[name="state"]');
	for (idx = 0; idx < usStates.length; ++idx) {
    	state = usStates[idx];
    	//code to create new option element, populate, and append
    	option = $(document.createElement('option'));
        option.attr('value', state.abbreviation);
        option.html(state.name);
        stateSelect.append(option);
	}
                    
}); //on document ready 


$('.signup-form').submit(function(){
    //code to execute when the sign-up form is submitted
    //this is the raw DOM form element
    //wrap it in a jQuery object so we can use jQuery methods on it
    var signupForm = $(this);

});