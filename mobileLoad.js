$(window).on("load", function () {
  loading();
});

window.addEventListener("resize", function () {
  loading();
});

function loading() {
  let details = navigator.userAgent;

  /* Creating a regular expression 
     containing some mobile devices keywords 
     to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i;

  /* Using test() method to search regexp in details
     it returns boolean value*/
  let isMobileDevice = regexp.test(details);
  if (isMobileDevice) {
    $(".loader-container").css({ display: "none" });

    $(".zero").css({ display: "block" });
  } else {
    $(".zero").css({ display: "none" });
  }
}

loading();
