
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

    $(".port1").hover( () => {

        $(".logo1").show({opacity: 1}, 5);
    },
        () => {

        $(".logo1").hide({opacity: 1}, 5);

        }
    )

    $(".port2").hover( () => {

        $(".logo2").show({opacity: 1}, 5);
    },
        () => {

        $(".logo2").hide({opacity: 1}, 5);

        }
    )


    $(".port3").hover( () => {

        $(".logo3").show({opacity: 1}, 5);
    },
        () => {

        $(".logo3").hide({opacity: 1}, 5);

        }
    )

});


