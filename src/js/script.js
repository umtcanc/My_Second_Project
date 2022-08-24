$('.js-open-menu').click(function (){
    $('.header-menu').toggleClass('active');
    $('.header-banner-menu').toggleClass('active');
    $(this).toggleClass("active");
        $("body, html").toggleClass('scroll-disabled'); 
    if ($(window).width()<992){
        $("body, html").toggleClass('scroll-disabled');
    }
})


// $('.js-open-menu').click(function (){
//     $('.header-menu').toggleClass('active');

//     if ($(window).width()<992){
//         $("body, html").toggleClass('scroll-disabled');
//     }
// })


$('.js-open-sub-menu').click(function (){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.overlay').removeClass('active')
        $('html, body').removeClass('scroll-disabled');
    }else{
        $('.js-open-sub-menu').removeClass('active');
        $(this).addClass('active');
        $('.overlay').addClass('active')
        $('html, body').addClass('scroll-disabled');
    }
    
})

$('.overlay').click(function (){
        $('.js-open-sub-menu').removeClass('active');
        $('.overlay').removeClass('active')
        $('html, body').removeClass('scroll-disabled');
        $('.langs-menu').removeClass('active')
        $('.gsm-menu').removeClass('active')
    
})


// $('.header').click(function (){
//     if($('.js-open-sub-menu').hasClass('active')){
//         $('.js-open-sub-menu').removeClass('active');
//         $('.overlay').removeClass('active')
//         $('html, body').removeClass('scroll-disabled');
//     }
// })    





    






 
    $('body').on('click', '.langs-menu', function () {
        if ($(window).width() > 100) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.js-overlay--header').removeClass('active');
                $('.header-content-wrapper').removeClass('desktop-menu-opened');
                $('.overlay').removeClass('active')
            } else {
                $(this).addClass('active');
                $('.overlay').addClass('active')
                $('.header-content-wrapper').addClass('desktop-menu-opened');
                $('.js-overlay--header').removeClass('active');
                $('.js-open-account-menu,.header-account-item').removeClass('active');

                if (!$(this).closest('.footer').length > 0) {
                    $('.overlay--header').addClass('active');
                }
            }
        } else {
            $('.langs-menu-content-wrapper').addClass('active');

        }
    });
    $('body').on('click', '.langs-menu-content-wrapper', function () {
        $('.langs-menu-content-wrapper').removeClass('active');
    });

    // gsm box

    $('body').on('click', '.gsm-menu', function () {
        if ($(window).width() > 192) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.overlay').removeClass('active')
                $('.js-overlay--header').removeClass('active');
                $('.header-content-wrapper').removeClass('desktop-menu-opened');
            } else {
                $(this).addClass('active');
                $('.header-content-wrapper').addClass('desktop-menu-opened');
                $('.overlay').addClass('active')
                $('.js-overlay--header').removeClass('active');
                $('.js-open-account-menu,.header-account-item').removeClass('active');

                if (!$(this).closest('.footer').length > 0) {
                    $('.overlay--header').addClass('active');
                }
            }
        } else {
            $('.gsm-menu-content-wrapper').addClass('active');

        }
    });
    $('body').on('click', '.gsm-menu-content-wrapper', function () {
        $('.gsm-menu-content-wrapper').removeClass('active');
    });



    var mainSwiper = new Swiper(".main-swiper", {
        speed: 700,
        slideVisibleClass: 'is-visible',
        watchSlidesVisibility: true,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        loop: true,
        centeredSlides: false,
        breakpoints: {
            320: {
                slidesPerView: 2.3,
                spaceBetween: 16,

            },
            480: {
                slidesPerView: 2.2,
                spaceBetween: 16,
            },
            728: {
                slidesPerView: 2.8,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 36,
            },
            1201: {
                slidesPerView: 5,
                spaceBetween: 55,
            },
        }

      });
      var cardSwiper = new Swiper(".card-swiper", {
        speed: 700,
        slideVisibleClass: 'is-visible',
        watchSlidesVisibility: true,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        loop: true,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
        navigation: {
            nextEl: ".card-slider-next",
            prevEl: ".card-slider-prev",

        },    
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                centeredSlides: true,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 18,
            },
            768: {
                slidesPerView: 1.4,
                spaceBetween: 43,
            },
            992: {
                slidesPerView: 2.4,
                spaceBetween: 36,
            },
            1201: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 59,
            },
        }

    });

    var whocardSwiper = new Swiper(".whoswiper", {
        speed: 700,
        slideVisibleClass: 'is-visible',
        watchSlidesVisibility: true,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        loop: true,
        centeredSlides: false,

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
        breakpoints: {
            320: {
                slidesPerView: 1.29,
                spaceBetween: 35,
                centeredSlides: true,
            },
            480: {
                slidesPerView: 1.3,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 1.6,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 36,
            },
            1201: {
                slidesPerView: 4,
                spaceBetween: -50,
                centeredSlides: false,
            },
        }

    });

    
    // $(window).scroll(function (event) {
    //     var scroll = $(window).scrollTop();
    //     // Do something
    // });

    
    // var target = $(".mypara").offset().top;

    // var interval = setInterval(function() {
    //     if ($(window).scrollTop() >= target) {
    //         alert("made it!");
    //         clearInterval(interval);
    //     }
    // }, 250);



    
    $(window).scroll(function() {
        
        if ($(window).width() < 768) {
            var height = $(window).scrollTop();
            var accordionheight =$('.pagesecond-accordion').offset();
            if(height >= accordionheight) {
                $( ".accordion-banner-item" ).first().click()
            };
        } else{
            var height = $(window).scrollTop();
            var accordionheight =$('.pagesecond-accordion').offset().top - 1000;
            if(height >= accordionheight) {
                $( ".accordion-banner-item" ).first().click()
            };
        }
    });

    $( ".accordion-banner-item" ).click(function() {
        if($(this).hasClass("active")){
        }else{
            $(".accordion-banner-item").removeClass("active");
            $(this).addClass("active")
            
        }
    });
    $( document ).ready(function() {
        $('.tablinks:nth-child(1)').click()

        $(".accordion-banner-item").last().addClass("accordion-last-item")
        setInterval(function(){ 
            if( $(".accordion-banner-item").hasClass("accordion-last-item active")){
                $(".accordion-banner-item").first().click();
            }else{
                $(".accordion-banner-item.active").next().click();
            }
        }, 10000);
    });

   
    

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    }
    
    var tablinks = document.querySelectorAll('.tablinks')
    
    tablinks.forEach(t => {
        t.addEventListener('click', e => {
            openCity(e, t.dataset.target)
        })
    })


// $(document).on('scroll', () => {
//     var offset = parseInt($(this).scrollTop(), 10)
//     $('.dbg').text(offset)
// })