(function() {

    // slider
    let slider = $('#slider');
    let buttons = $('.btn--showcase');
    
    slider.slick({
        infinite: false,
        vertical: true,
        arrows: false,
        dots: false,
        speed: 500,
        swipe: false,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }]
    });
    
    function throttle(f, t) {
      return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall === undefined // function is being called for the first time
            || (this.lastCall - previousCall) > t) { // throttle time has elapsed
          f(args);
        }
      }
    }
    
    document.body.addEventListener('wheel', throttle(funcScroll, 50))
    
    function funcScroll(e) {
        if(e.wheelDeltaY < 0) {
            slider.slick('slickNext');
            let ind = slider.slick('slickCurrentSlide');
            buttons.removeClass('btn--showcase--active');
            let btn = buttons[ind];
            $(btn).addClass('btn--showcase--active');
           
        }
    
        if(e.wheelDeltaY > 0) {
            slider.slick('slickPrev');
            let ind = slider.slick('slickCurrentSlide');
            buttons.removeClass('btn--showcase--active');
            let btn = buttons[ind];
            $(btn).addClass('btn--showcase--active');
        }
    }
    
    
    
    buttons.on('click', function(e) {
        e.preventDefault();
        buttons.removeClass('btn--showcase--active');
        $(this).addClass('btn--showcase--active');
    
        let ind = $(this).index();
        slider.slick('slickGoTo', ind)
    });
    
    // btn burger
    $('.btn--burger').on('click', function() {
        $('.nav').toggleClass('nav--active');
        let headerItem = $('.header__item')[0];
        $(headerItem).toggleClass('header__item--hide');
        $('.scroll').toggleClass('scroll--active');
        let footer = $('.footer__wrapper')[0];
        $(footer).toggleClass('footer__wrapper--hide');
    });
    
})()    

