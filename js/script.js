
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

    $(".port4").hover( () => {

        $(".logo4").show({opacity: 1}, 5);
    },
        () => {

        $(".logo4").hide({opacity: 1}, 5);

        }
    )


    $(".port5").hover( () => {

        $(".logo5").show({opacity: 1}, 5);
    },
        () => {

        $(".logo5").hide({opacity: 1}, 5);

        }
    )

    $(".port6").hover( () => {

        $(".logo6").show({opacity: 1}, 5);
    },
        () => {

        $(".logo6").hide({opacity: 1}, 5);

        }
    )

    $(".port7").hover( () => {

        $(".logo7").show({opacity: 1}, 5);
    },
        () => {

        $(".logo7").hide({opacity: 1}, 5);

        }
    )

});

// contact form


function contactForm(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;

    if (name !== "" && email !== "" && message !== ""){
        alert(name+ ' we have received your message. Thank you for reaching out to us.');
    } else if(name !== "" || email !== "" || message !== ""){
        alert('Fill everything, please.')
    }
};

