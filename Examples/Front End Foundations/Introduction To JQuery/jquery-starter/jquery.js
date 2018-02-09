// $(document).ready(function() { $("p").hide(); })
$(function () {
    //let pHidden = false;
    // $("#hidePets").click(function () {
    //     // if (pHidden) {
    //     //     $("p").show();
    //     //     pHidden = false;
    //     // }
    //     // else {
    //     //     $("p").hide();
    //     //     pHidden = true;
    //     // }
    //     $("p").toggle();
    // });
    $("p").click(function(){
        //$(this).addClass("blue");
        $(this).css("color", "orange");
    });
});
