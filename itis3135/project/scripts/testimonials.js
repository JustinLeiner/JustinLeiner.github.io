/* Referenced activity 13 */

$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "testimonials.json",
        beforeSend: function() {
            $("#testimonials").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#testimonials").html("");
            $.each(data,function(){
                $.each(this,function(key,value){
                    var xmlDoc = $(this);
                    $("#testimonials").append("<h3>" +
                        value.name + "</h3>" +
                        value.bio + "<br>");
                });
            });

        }
    });
});
