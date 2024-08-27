// a태그 부드럽게 스크롤링
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

// 카드뉴스 슬라이드 
$(document).ready(function() {
    $('.cardnews-wrap').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 2500,
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        centerPadding: '10px',
        setPosition: 0,
        cssEase: 'ease-out',
        responsive: [
            {
              breakpoint: 1000,
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

// 홈페이지 슬라이더
$(document).ready(function() {
  var swiper = new Swiper(".swiper1", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    loop : true,
    loopAdditionalSlides : 1,
    autoplay:{
		  delay: 2500, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
      loop: true,
	  },
    coverflowEffect: {
      rotate: 0, // 슬라이더 회전 각 : 클수록 슬라이딩 시 회전이 커짐
      stretch: 100, // 슬라이더간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
      depth: 200, // 깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
      modifier: 1, // 효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    // breakpoints: {
    // 	900: {
    //     slidesPerView:5,
    //     centeredSlides:false,
    //     spaceBetween:20,
    //   },
    // },
  });
});

//상세페이지 슬라이더
$(document).ready(function() {
  var slider = new Swiper(".swiper2", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
});

//상세페이지 클릭 시 팝업
$(document).ready(function() {
  var sliderPopup = new Swiper(".slider-popup", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
});

//popup script
slider.controller.control = sliderPopup;
sliderPopup.controller.control = slider;
$(document).ready(function () {
  // 사진보기 팝업 열기
  $(".swiper2 img").click(function () {
    $(".popup-wrap").css("visibility", "visible");
  });

  // 사진보기 팝업 닫기
  $(".close_btn").click(function () {
    $(".popup-wrap").css("visibility", "hidden");
  });
});


