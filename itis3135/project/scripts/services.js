$(document).ready(function() {

$("#nav_list a").click(function(evt) {

    var title = $(this).attr("title");
    console.log(title);
    var url = '../components/'+title+'.json'
    var html = "";

    $.getJSON(url, function(data){
        $.each(data,function(){
            $.each(this,function(key,value){
                $("#main").html(html);
                html += "<h2>" + value.title +"</h2>";
                
                html += "<img src =\"" + value.image + "\"";

                html += "br";

                html += "<p>" + value.text +"</p>";
                
                
                $("#main").html(html); 
            });
        });

    });

});
});