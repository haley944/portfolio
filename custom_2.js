$(document).ready(function() {
    $('ul#gnb > li > a').click(function(e) {
        e.preventDefault(); //a 태그 버벅거림 제거
        $('html,body').animate({scrollTop:$(this.hash).offset().top -53}, 500);
        //부드럽게 스크롤 이동하는부분 - 53부분은 고정 header이기때문에 추가됨, 고정 header가 아닌 경우 삭제
    })
});

// Hide Header scrollDown
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


//슬릭슬라이더 멀티플

// function sliderSet(slickfor,slicknav){
//     slickfor.slick({
//     dots: false,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     rows: 1,
//     slidesToShow: 3,
//     centerMode: true,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     setPosition: 0,
//     variableWidth: true,
//     cssEase: 'ease-out',
//     asNavFor: slicknav,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//             centerPadding: '20px',
//             slidesToShow: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//             centerPadding: '20px',
//             slidesToShow: 1
//                 }
//             }
//         ]
//     });
//     slicknav.slick({
//     dots: false,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     rows: 1,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     variableWidth: true,
//     centerPadding: '10px',
//     setPosition: 0,
//     cssEase: 'ease-out',
//     asNavFor: slickfor,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//             centerMode: true,
//             slidesToShow: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//             centerMode: true,
//             slidesToShow: 1
//             }
//         }
//     ]
            
//     });
// };

// $('.slide-wrap').each(function(i,el){ //.slide-box -> slick-slider 감싸고 있는 부모 클래스명
//     i+=1;	
//     var slickfor = $(el).find('.slider-for').addClass('for'+ i) 
//     var slicknav = $(el).find('.slider-nav').addClass('nav'+ i)
//     sliderSet(slickfor,slicknav);
// });


//slick-slide option
$(document).ready(function sliderSet(slickfor,slicknav){
    slickfor.slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        rows: 1,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        setPosition: 0,
        variableWidth: true,
        cssEase: 'ease-out',
        asNavFor:slicknav,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerPadding: '20px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '20px',
                slidesToShow: 1
              }
            }
        ]
    });

    slicknav.slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        centerPadding: '10px',
        setPosition: 0,
        cssEase: 'ease-out',
        asNavFor: slickfor,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                slidesToShow: 1
              }
            }
        ]
    });
});

$('.slide-box').each(function(i,el){ //.slide-box -> slick-slider 감싸고 있는 부모 클래스명
    i+=1;	
    var slickfor = $(el).find('.slider-for').addClass('for'+ i) 
    var slicknav = $(el).find('.slider-nav').addClass('nav'+ i) 
    sliderSet(slickfor,slicknav);
});
