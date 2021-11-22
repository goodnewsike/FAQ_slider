// accordion
var action = "click";
var speed = "500";

$(document).ready(function() {
    // question handler
    $('li.q').on(action, function() {
        // get next element
        $(this).next()
            .slideToggle(speed)
            // select all other answers
            .siblings('li.a')
            .slideUp();
        // get image for active question
        var img = $(this).children('img');
        // remove the 'rotate' class for a;; images except for the active
        $('img').not(img).removeClass('rotate');
        // toggle totate class
        img.toggleClass('rotate');
    });
});