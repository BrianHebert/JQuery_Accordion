$(function() {

    $("#accordion h3").click(function(){

        $("#accordion ul ul").slideUp();
        $(".hMenu").hide();

        var divName = $(this).text();
        $("#"+divName).show();

        if($(this).next().is(":hidden")){
            $(this).next().slideDown();
        }
        

    })

})