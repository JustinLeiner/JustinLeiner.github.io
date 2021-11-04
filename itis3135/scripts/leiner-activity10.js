$(document).ready(function() {
    // Global variables
    var url;
    var caption;

    // pre load the image for each link
    $("#image_list a").each(function () {
        url=$(this).attr("href");
        caption = $(this).attr("title");
    });

    (new Image()).src = this;

    // set up the event handlers for each link
    $("#image_list a").click(function(evt){

        url = $(this).attr("href");
        caption = $(this).attr("title");

        $("#caption").fadeOut(3000,function(){
               
            });

        $("#image").fadeOut(3000,function(){
                $("#image").attr("src",url).fadeIn(3000);
                 $("#caption").text(caption).fadeIn(3000);

                 // Enlarges fontsize 
                $("#caption").animate({
                fontSize: "2em"}, 3000);

            });


        // cancel the default action of each link
        evt.preventDefault();
    });

    // move the focus to the first link
    $("a:eq(0)").focus();

}); // end ready