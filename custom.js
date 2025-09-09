$(document).ready(function () {
  // 1. 메뉴 클릭 시 현재 페이지에서 부드러운 이동
  $('ul#gnb > li > a').click(function (e) {
    const target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top - 53
      }, 500);
    }
  });

  // 2. 다른 페이지에서 넘어왔을 때 처리
  const hash = window.location.hash;
  if (hash) {
    const target = $(hash);
    if (target.length) {
      setTimeout(() => {
        $('html,body').animate({
          scrollTop: target.offset().top - 53
        }, 500);
      }, 100); // 딜레이 중요!
    }
  }
});

//header 크기에 따라 padding 값 주기
document.addEventListener('DOMContentLoaded', setMainPadding);
window.addEventListener('resize', setMainPadding);

function setMainPadding() {
    const header = document.querySelector('header');
    const mainContent = document.querySelector('.container');
    if (header && mainContent) {
        const headerHeight = header.offsetHeight;
        mainContent.style.paddingTop = `${headerHeight}px`;
    }
}

// Hide Header scrollDown
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }

// 스크롤 이벤트 리스너
function animateOnScroll() {
  const mobileWrap = document.querySelector('.home_wrap');
  const animatedItems = document.querySelectorAll('.slide-in-fwd-top');

  // mobileWrapRect 변수 선언
  const mobileWrapRect = mobileWrap.getBoundingClientRect();

  // triggerPoint 변수 선언 (주석 해제)
  const triggerPoint = window.innerHeight * 0.8;

  const isOutOfView = mobileWrapRect.bottom < 0 || mobileWrapRect.top > window.innerHeight;

  // 수정된 조건식: mobileWrapRect.top을 기준으로 비교
  if (mobileWrapRect.top < triggerPoint) {
    animatedItems.forEach(item => {
      item.classList.remove('slide-in-fwd-top');
      void item.offsetWidth;
      item.classList.add('slide-in-fwd-top');
    });
  }

  if (window.scrollY === 0) {
    animatedItems.forEach(item => {
      item.classList.remove('slide-in-fwd-top');
      void item.offsetWidth;
      item.classList.add('slide-in-fwd-top');
    });
  }
}
// 스크롤 이벤트 등록
window.addEventListener('scroll', animateOnScroll);

// 페이지 로드 시 실행
window.addEventListener('load', animateOnScroll);



// 카드뉴스 슬라이드 
$(document).ready(function() {
  var swiper1 = new Swiper(".cardnews-wrap", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,  //브라우저가 1024보다 클 때
        spaceBetween: 30,
      },
    },
  });
});

// 홈페이지 슬라이더
$(document).ready(function() {
  var swiper2 = new Swiper(".swiper1", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    loop : false,
    loopAdditionalSlides : 1,
    // autoplay:{
		//   delay: 2500, // 시간 설정
    //   disableOnInteraction: false, // false-스와이프 후 자동 재생
	  // },
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
    //   500: {
        
    //   },
    // },
  });
});

//상세페이지 슬라이더
$(document).ready(function() {
  var swiper3 = new Swiper(".swiper2", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
});

//상세페이지 클릭 시 팝업
$(document).ready(function() {
  var swiper4 = new Swiper(".slider-popup", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
});

//popup script
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


//카테고리
$(document).ready(function(){
  function category() {
  
  // 메뉴 열기/닫기 토글
  $("#menu_open").on("click", function() {
      $("#category").toggleClass('active');
      $(this).toggleClass('active');
  });

  // 닫기 버튼 또는 링크 클릭 시 메뉴 닫기
  $("#category .pop_close, #category a").on("click", function() {
      $("#category").removeClass('active');
  });

  // 메뉴 외부 클릭 시 메뉴 닫기
  $(document).on("click", function(event) {
      if (!$(event.target).closest("#category, #menu_open").length) {
          $("#category").removeClass('active');
          $("#menu_open").removeClass('active');
      }
  });
}

// 함수 호출
category();
})

// 스크롤 영역 진입 시 메뉴 버튼 css 변경
window.onload = function() {
  const menuItems = document.querySelectorAll('#gnb a');
  const sections = document.querySelectorAll('main section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const targetLink = document.querySelector(`#gnb a[data-target="${id}"]`);

      if (entry.isIntersecting) {
        menuItems.forEach(item => item.classList.remove('active'));
        if (targetLink) targetLink.classList.add('active');
      }
    });
  }, {
    root: null,
    threshold: 0.5
  });

  sections.forEach(section => observer.observe(section));
};





