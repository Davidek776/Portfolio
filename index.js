gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

gsap.set(".paper", { autoAlpha: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "svg",
      pin: true,
      start: "top top",
      end: "+=10000",
      scrub: 0.5,
    },
    defaults: { duration: 1, ease: "none" },
  })
  .to(".a", {
    scrollTrigger: {
      trigger: ".a",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+=20000",
      onComplete: foo,
    },
    x: -3000,
    duration: 2000,
    ease: "power1.out",
  })
  .to(".b", {
    scrollTrigger: {
      trigger: ".b",
      pin: true,
      scrub: 1,
      end: "+=34500",
    },
    x: -3000,
    duration: 2000,
    ease: "power1.out",
  })
  .to(".paper", {
    onComplete: foo,
    stagger: 0.7,
    motionPath: (i, target) => {
      return {
        path: ".path",
        align: ".path",
        // onComplete: foo,
        curviness: 1.5,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        stagger: 1,
        start: 0,
        end: i === 7 ? 1 : 1.001,
        // end: 1,
      };
    },
  });
// var square = gsap.to(".a", {
//   scrollTrigger: {
//     trigger: ".a",
//     pin: true,
//     scrub: 1,
//     start: "top top",
//     end: "+=20000",
//   },
//   x: -3000,
//   duration: 2000,
//   ease: "power1.out",
// });
// square.timeScale(0.5);

// var square2 = gsap.to(".b", {
//   scrollTrigger: {
//     trigger: ".b",
//     pin: true,
//     scrub: 1,
//     end: "+=34500",
//   },
//   x: -3000,
//   duration: 2000,
//   ease: "power1.out",
// });
// square.timeScale(0.5);
let j = 1;
const window1 = $(".one");
const window2 = $(".two");
const window3 = $(".three");
const window4 = $(".four");
const window5 = $(".five");
const window6 = $(".six");
const window7 = $(".seven");

const closeButton = $(".close-button");
const popOut = $(".pop-out");

const paper = document.querySelector("#paperSelect");
paper.addEventListener("click", () => {
  window1.css({ display: "flex" });
  // alert("one");
});

const paper2 = document.querySelector("#paperSelect2");
paper2.addEventListener("click", () => {
  window2.css({ display: "flex" });
});

const paper3 = document.querySelector("#paperSelect3");
paper3.addEventListener("click", () => {
  window3.css({ display: "flex" });
});

const paper4 = document.querySelector("#paperSelect4");
paper4.addEventListener("click", () => {
  window4.css({ display: "flex" });
});

const paper5 = document.querySelector("#paperSelect5");
paper5.addEventListener("click", () => {
  window5.css({ display: "flex" });
});

const paper6 = document.querySelector("#paperSelect6");
paper6.addEventListener("click", () => {
  window6.css({ display: "flex" });
  // alert("six");
});

const paper7 = document.querySelector("#paperSelect7");
paper7.addEventListener("click", () => {
  window7.css({ display: "flex" });
  // alert("seven");
});

closeButton.click(function () {
  popOut.css({ display: "none" });
});

function foo() {
  // alert("end");
  window.scrollTo(0, document.body.scrollHeight);
}
// console.log(offsetX);

// let start = 0;
// let end = 1;
// document.addEventListener("scroll", () => {
//   // let paper2 = document.querySelector("svg");
//   // var rect = paper2.getBoundingClientRect();

//   // let offsetX = paper2.getBoundingClientRect;
//   console.log($(paperSelect).offset().left);
//   // alert($(window).width());
//   if ($(paperSelect).offset().left > $(window).width() - 300) {
//     if (start == 0 && end == 1) {
//       // alert("here");
//     } else {
//       start = 1;
//     }
//     amount++;
//   }

//   if ($(paperSelect).offset().left > $(window).width() - 300) {
//     if (start == 0 && end == 1) {
//       // alert("here");
//     } else {
//       start = 1;
//     }
//     amount++;
//   }
// });

const test = () => {
  alert("start");
};
const test2 = () => {
  alert("end");
};

// ScrollTrigger.create({
//   trigger: "svg",
//   onEnter: test,
//   onLeave: test2,
//   // onEnterBack: test2,
//   // onLeaveBack: test2,
// });

// var $output = $("#output"),
//   scrolling = "<span id='scrolling'>Scrolling</span>",
//   stopped = "<span id='stopped'>Stopped</span>";
// $(window).scroll(function () {
//   console.log("scrolling");

//   clearTimeout($.data(this, "scrollCheck"));
//   $.data(
//     this,
//     "scrollCheck",
//     setTimeout(function () {
//       console.log("stop");
//     }, 250)
//   );
// });

$(".stickman")
  .find("div")
  .css("animation-duration", (0).toString() + "s");
$(".head")
  .find("div")
  .css("animation-duration", (0 * 4).toString() + "s");
$(".torso")
  .find("div")
  .css("animation-duration", (0).toString() + "s");
$("#background-scroll").css("animation-duration", (0 * 4).toString() + "s");

$(window).scroll(function () {
  console.log("scrolling");
  $(".stickman")
    .find("div")
    .css("animation-duration", (1).toString() + "s");
  $(".head")
    .find("div")
    .css("animation-duration", (1 * 4).toString() + "s");
  $(".torso")
    .find("div")
    .css("animation-duration", (1).toString() + "s");
  $("#background-scroll").css("animation-duration", (1 * 4).toString() + "s");
  clearTimeout($.data(this, "scrollCheck"));
  $.data(
    this,
    "scrollCheck",
    setTimeout(function () {
      console.log("stop");
      $(".stickman")
        .find("div")
        .css("animation-duration", (0).toString() + "s");
      $(".head")
        .find("div")
        .css("animation-duration", (0 * 4).toString() + "s");
      $(".torso")
        .find("div")
        .css("animation-duration", (0).toString() + "s");
      $("#background-scroll").css(
        "animation-duration",
        (0 * 4).toString() + "s"
      );
    }, 250)
  );
});

// document.addEventListener("scroll", (event) => {
//   if (
//     window.innerHeight - 1000 <= document.body.offsetHeight &&
//     document.body.offsetHeight < window.innerHeight
//   ) {
//     console.log("lolik");
//   }
// });

// window.onscroll = function () {
//   const difference =
//     document.documentElement.scrollHeight - window.innerHeight - 5500;
//   const scrollposition = document.documentElement.scrollTop;
//   if (difference - scrollposition <= 2) {
//     console.log("Bottom of Page!");
//   }
// };

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const box = document.querySelector(".outro");
const message = document.querySelector("#message");

document.addEventListener("scroll", function () {
  if (isInViewport(box)) {
    console.log("Is IN VIEWPORt");
    window.scrollTo(0, 9500);
  } else {
    console.log("NOT INVIEWPORt");
  }
});

// document.addEventListener("scroll", function () {
//   var $win = $(window);

//   $win.scroll(function () {
//     if ($win.scrollTop() == 0) {
//       document.querySelector(".intro-img").css({ display: "block" });
//     } else if ($win.height() + $win.scrollTop() == $(document).height()) {
//       alert("Scrolled to Page Bottom");
//     }
//   });
// });

document.addEventListener("scroll", function () {
  var win = $(window);
  if (win.scrollTop() == 0) {
    $(".intro-img").css({ display: "block" });
    $(".intro-img2").css({ display: "none" });
    $(".intro-img3").css({ display: "none" });
    $(".intro-img4").css({ display: "none" });

    setTimeout(() => {
      $(".intro-img").css({ display: "none" });
      $(".intro-img2").css({ display: "block" });
      $(".intro-img3").css({ display: "none" });
      $(".intro-img4").css({ display: "none" });
    }, "2000");
    setTimeout(() => {
      $(".intro-img").css({ display: "none" });
      $(".intro-img2").css({ display: "none" });
      $(".intro-img3").css({ display: "block" });
      $(".intro-img4").css({ display: "none" });
    }, "4000");
    setTimeout(() => {
      $(".intro-img").css({ display: "none" });
      $(".intro-img2").css({ display: "none" });
      $(".intro-img3").css({ display: "none" });
      $(".intro-img4").css({ display: "block" });
    }, "6000");
    setTimeout(() => {
      $(".intro-img").css({ display: "none" });
      $(".intro-img2").css({ display: "none" });
      $(".intro-img3").css({ display: "none" });
      $(".intro-img4").css({ display: "none" });
    }, "8000");
  }
});

window.addEventListener("load", (event) => {
  $(".intro-img").css({ display: "block" });
  $(".intro-img2").css({ display: "none" });
  $(".intro-img3").css({ display: "none" });
  $(".intro-img4").css({ display: "none" });

  setTimeout(() => {
    $(".intro-img").css({ display: "none" });
    $(".intro-img2").css({ display: "block" });
    $(".intro-img3").css({ display: "none" });
    $(".intro-img4").css({ display: "none" });
  }, "2000");
  setTimeout(() => {
    $(".intro-img").css({ display: "none" });
    $(".intro-img2").css({ display: "none" });
    $(".intro-img3").css({ display: "block" });
    $(".intro-img4").css({ display: "none" });
  }, "4000");
  setTimeout(() => {
    $(".intro-img").css({ display: "none" });
    $(".intro-img2").css({ display: "none" });
    $(".intro-img3").css({ display: "none" });
    $(".intro-img4").css({ display: "block" });
  }, "6000");
  setTimeout(() => {
    $(".intro-img").css({ display: "none" });
    $(".intro-img2").css({ display: "none" });
    $(".intro-img3").css({ display: "none" });
    $(".intro-img4").css({ display: "none" });
  }, "8000");
});

document.addEventListener("scroll", function () {
  var win = $(window);

  win.scroll(function () {
    if (win.height() + win.scrollTop() == $(document).height()) {
      $(".outro-img").css({ display: "block" });
      setTimeout(() => {
        $(".outro-img").css({ display: "none" });
        $(".outro-img2").css({ display: "block" });
      }, "2000");
    } else {
      $(".outro-img").css({ display: "none" });
      $(".outro-img2").css({ display: "none" });
    }
  });
});
