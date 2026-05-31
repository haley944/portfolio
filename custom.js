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
document.addEventListener('DOMContentLoaded', setLayoutByHeader);
window.addEventListener('resize', setLayoutByHeader);

function setLayoutByHeader() {
  const header = document.querySelector('header');
  const mainContent = document.querySelector('.container');
  const root = document.documentElement;

  if (!header || !mainContent) return;

  const headerHeight = header.offsetHeight;
  mainContent.style.paddingTop = `${headerHeight}px`; //padding-top 값
  root.style.setProperty('--header-h', `${headerHeight}px`); //css 변수로 header 높이 전달, subPage02에서 sldier 때문에 필요
}

// 스크롤 이벤트 리스너
const homeSection = document.querySelector('#home');

if (homeSection) {
  let topAnimationPlayed = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const animatedItems = entry.target.querySelectorAll('.slide-item');
        animatedItems.forEach(item => {
          item.classList.add('slide-in-fwd-top');
        });
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(homeSection);

  window.addEventListener('scroll', () => {
    if(window.scrollY === 0 && !topAnimationPlayed){
      const animatedItems = document.querySelectorAll('.slide-item');
      animatedItems.forEach(item => {
        item.classList.remove('slide-in-fwd-top');
        void item.offsetWidth;
        item.classList.add('slide-in-fwd-top');
      });

      topAnimationPlayed = true;
    }

    if(window.scrollY > 50){
      topAnimationPlayed = false;
    }
  });
}

/* 맨 위 도달 시 1회만 재실행 */
window.addEventListener('scroll', () => {

  if(window.scrollY === 0 && !topAnimationPlayed){
    const animatedItems = document.querySelectorAll('.slide-item');
    animatedItems.forEach(item => {
      item.classList.remove('slide-in-fwd-top');
      void item.offsetWidth;
      item.classList.add('slide-in-fwd-top');
    });

    topAnimationPlayed = true;
  }
  /* 아래로 내려가면 다시 실행 가능 상태로 변경 */
  if(window.scrollY > 50){
    topAnimationPlayed = false;
  }
});

// 카드뉴스 슬라이드 
$(document).ready(function() {
  var swiper1 = new Swiper(".cardnews-wrap", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
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
    loop : true,
    loopAdditionalSlides : 1,
    autoplay:{
		  delay: 2500, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
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
  });
});

//상세페이지 슬라이더
$(document).ready(function() {
  var swiper3 = new Swiper(".swiper2", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    loop: true,
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
