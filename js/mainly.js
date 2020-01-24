/*global $, window, document*/
$(document).ready(function(){
    'use strict';
     //adjust header height
     var myHeader = $('.overlay');
     myHeader.height($(window).height());
     $(window).resize(function(){
         myHeader.height($(window).height());
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
            case "none":
                $('.screen2').css("display", "none");
                break;
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