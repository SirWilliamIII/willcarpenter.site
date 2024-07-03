document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const content = document.getElementById("content");

  setTimeout(() => {
    intro.style.animation = "fadeOut 1s ease-in forwards";

    setTimeout(() => {
      intro.classList.add("hidden");
      console.log("hello");
      content.classList.remove("hidden");
      content.classList.add("visible");
    }, 1000);
  }, 5000);

  /*============================================
      Page Preloader
      ==============================================*/

  /*============================================
      Header
      ==============================================*/

  document.getElementById("home").style.height = `${window.innerHeight + 50}px`;

  window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var wh = window.innerHeight;
    var sf = 1 + st / (10 * wh);

    var backstretchImg = document.querySelector(".backstretch img");
    if (backstretchImg) {
      backstretchImg.style.transform = "scale(" + sf + ")";
      backstretchImg.style.webkitTransform = "scale(" + sf + ")";
    }

    var homeContainer = document.querySelector("#home .container");
    if (homeContainer) {
      homeContainer.style.opacity = 1.6 - st / 400;
    }

    var backstretch = document.querySelector(".backstretch");
    if (backstretch) {
      if (window.pageYOffset > window.innerHeight + 50) {
        backstretch.style.display = "none";
      } else {
        backstretch.style.display = "block";
      }
    }
  });

  /*============================================
      Navigation Bar
      ==============================================*/
  if (window.pageYOffset < window.innerHeight - 35) {
    document.getElementById("main-nav").classList.remove("scrolled");
  } else {
    document.getElementById("main-nav").classList.add("scrolled");
  }

  window.addEventListener("scroll", function () {
    if (window.pageYOffset < window.innerHeight - 35) {
      document.getElementById("main-nav").classList.remove("scrolled");
    } else {
      document.getElementById("main-nav").classList.add("scrolled");
    }
  });

  document.querySelectorAll("#main-nav a").forEach(function (element) {
    element.addEventListener("click", function (event) {
      console.log(event.target);
      var target = "";
      if (document.querySelector(this.getAttribute("href"))) {
        target = document.querySelector(this.getAttribute("href"));
      }

      window.scrollTo({
        top: target.offsetTop - 30,
        behavior: "smooth",
      });
      if (
        window.innerWidth < 769 &&
        document.getElementById("site-nav").offsetWidth > 0
      ) {
        document.querySelector(".navbar-toggle").click();
      }
    });
  });

  /*============================================
      Project thumbs
      ==============================================*/
  $(window).load(function () {
    $("#projects-container").css({
      visibility: "visible",
    });

    $("#projects-container").masonry({
      itemSelector: ".project-item:not(.filtered)",
      columnWidth: 350,
      isFitWidth: true,
      isResizable: true,
      isAnimated: !Modernizr.csstransitions,
      gutterWidth: 25,
    });
  });

  /*============================================


      /*============================================
      Contact Map
      ==============================================*/
});
