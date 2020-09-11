/*window.onload = function() {
    var elements = document.getElementsByTagName('sd');
    for (var i in elements) {
        if (!elements.hasOwnProperty(i)) continue;
        elements[i].addEventListener( 'mouseover', function() {
            this.className += 'a';
        }
        elements[i].addEventListener( 'mouseout', function() {
            this.className = this.className.replace( /(?:^|\s)a(?!\S)/g , '' );
        }
    }
} */
$(document).ready(function() {
$(".grayscale").hover(
    function () {
        $(this).addClass("grayscale-off");
    }, function () {
        $(this).removeClass("grayscale-off");
    }
);
/*
$(".grayscale").on("mouseover", function () {
    alert("hover");
    $(this).addClass('grayscale-off');
});*/
});

$('.mobil-menu-btn').click(function () {
    $(this).toggleClass('opened');
    $('.mobile-menu').toggleClass('open');
})

$('.mobile-submenu-btn').click(function () {
    $(this).toggleClass('opened-btn');
    //$(this).toggleClass('opened-btn');
    $(this).next().next('.mobile-submenu').toggleClass('open-submenu');
})

$('.list').click(function () {
    $('.mobile-menu').removeClass('open');
    $('.mobil-menu-btn').removeClass('opened');
})


var a=0;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $( "header" ).addClass("header-white");


    } else {
        $( "header" ).removeClass("header-white");

    }

    var oTop = $('.counter-section').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
        a = 1;
    }
});

if (screen.width > 765) {}
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("gotopbtn").style.display = "block";
        } else {
            document.getElementById("gotopbtn").style.display = "none";
        }
    }
    function topFunction() {
        var gotopbtnElement=document.getElementById("gotopbtn");
        var rocketFire=gotopbtnElement.getElementsByTagName('b');
        rocketFire[0].style.display = "inline-block";
        setTimeout(function(){  rocketFire[0].style.display = "none"; }, 1100);
        console.warn("rocketFire",rocketFire);
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 1000, 'swing', function() {
        });
    }

$( window ).scroll(function() {
    $( ".counter-section" ).addClass("visibled");
});
$(".search-show-btn").click(function(){
    $(".search-text").toggleClass("slide");
});

/*
$('.play').on('click',function(){
    $('#main-slider').trigger('play.owl.autoplay',[1000])
    $(this).addClass('close');
    $('.stop').removeClass('close');
})
$('.stop').on('click',function(){
    $('#main-slider').trigger('stop.owl.autoplay')
    $(this).addClass('close');
    $('.play').removeClass('close');
})
*/


$(".list").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash ;
    $('html, body').animate({
        scrollTop:$(hash).offset().top
    },1000 );
});

$('#accordionExample').collapse({
    toggle: false
})



$('.owl-next').click(function () {
    var owlNext=document.getElementsByClassName('owl-next');
    var sliderArrowBoxNext=owlNext[0].getElementsByClassName('slider-arrow-box');
    var SliderRocketFire=sliderArrowBoxNext[0].getElementsByTagName('b');
    SliderRocketFire[0].style.display = "inline-block";
    setTimeout(function(){  SliderRocketFire[0].style.display = "none"; }, 200);
})

$('.owl-prev').click(function () {
    var owlPrev=document.getElementsByClassName('owl-prev');
    var sliderArrowBoxNext=owlPrev[0].getElementsByClassName('slider-arrow-box');
    var SliderRocketFire=sliderArrowBoxNext[0].getElementsByTagName('b');
    SliderRocketFire[0].style.display = "inline-block";
    setTimeout(function(){  SliderRocketFire[0].style.display = "none"; }, 200);
})


//greyscalemethod
/**/
/*
$('.img-border-radius').click(function (){
    alert("hover");
    $(this).addClass('grayscale-off');
});

$(document).ready(function () {
    $('.img-border-radius').click(function (){
        alert("hover");
        $(this).addClass('grayscale-off');
    });
    $('.grayscale').onmouseover(function () {
        alert("hover");
        $(this).addClass('grayscale-off');
    });


    $(".grayscale").hover(
        function () {
            alert("hover");
            $(this).addClass("grayscale-off");
        }, function () {
            $(this).removeClass("grayscale-off");
        }
    );
}
*/