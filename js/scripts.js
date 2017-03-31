/*
  - Light Anchor
*/
jQuery(document).ready(function($) {
    $(".light-anchor").click(function(event) {
        event.preventDefault();
        console.log($(this.hash));
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});
/*
 **********
 */