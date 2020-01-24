$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex === 1 ) {
                $('.wizard > .steps ul').addClass('step-2');
            } else {
                $('.wizard > .steps ul').removeClass('step-2');
            }
            if ( newIndex === 2 ) {
                $('.wizard > .steps ul').addClass('step-3');
            } else {
                $('.wizard > .steps ul').removeClass('step-3');
            }
            return true; 
        },
        labels: {
            finish: "Submit",
            next: "Continue",
            previous: "Back"
        }
    });

    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    });
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    });

    // Add input fields based on number selection from drop-down in jQuery
    $("#totalMembers").change(function() {
		$('.one').hide();
		$('.two').hide();
		$('.three').hide();
		$('.four').hide();
        $('.five').hide();
        
        var selectValue = $('#totalMembers').val();

        switch (selectValue) {
            case "one":
            $('.one').show();
            break;
            case "two":
            $('.one').show();
            $('.two').show();
            break;
            case "three":
            $('.one').show();
            $('.two').show();
            $('.three').show();
            break;
            case "four":
                $('.one').show();
                $('.two').show();
                $('.three').show();
            $('.four').show();
            break;

            case "five":
                $('.one').show();
                $('.two').show();
                $('.three').show();
                $('.four').show();
                $('.five').show();
            break;
        }
            
        });

});

