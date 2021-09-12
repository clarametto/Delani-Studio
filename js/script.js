
// WHAT WE DO

$(document).ready(function(){
    $(".Design").click(function(){
        $("#design").toggle(2000);
        $("#text").toggle(2000);
    });
    $(".Development").click(function(){
        $("#development").toggle(2000);
        $("#dev").toggle(2000);
    });
    $(".Product").click(function(){
        $("#product").toggle(2000);
        $("#pro").toggle(2000);
    });

    // PORTFOLIO

    $(".port").hover( () => {

        $(".logo").show({opacity: 1}, 5);
    },
        () => {

        $(".logo").hide({opacity: 1}, 5);

        }
    )

});


