$(document).ready(function() {



        // get the image URL and caption for each image
        $("a").each(function () {
            
            var url = $(this).attr('href');

            var caption = $(this).attr('title');

        })


        // preload the image for each link

        // set up the event handlers for each link

        $("a").click(function(evt) {
            
            // cancel the default action of each link
            evt.preventDefault();


            $("#imageBox").html('<img src="' + this.href + '" />');
        })


}); // end ready