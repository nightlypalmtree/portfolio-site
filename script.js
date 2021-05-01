addEventListener("load",() => {

    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const classHide = "slides-hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        slides[(index ++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 2000);
    }

  });

      
  

      

      function showHideTea() {
        var Jedix = document.getElementById("Jedi");
        var Spacex = document.getElementById("Space");
        var Excursionx = document.getElementById("Excursion");

        if (Excursionx.style.display === "block") {
          Excursionx.style.display = "none";
        } ;

        if (Jedix.style.display === "block") {
          Jedix.style.display = "none"; };

          if (Spacex.style.display === "block") {
            Spacex.style.display = "none"; } ;


        var Teax = document.getElementById("Tea");
        if (Teax.style.display === "block") {
          Teax.style.display = "none";
        } else {
          Teax.style.display = "block";
        }
      };


      function showHideJedi() {
        var Teax = document.getElementById("Tea");
        var Spacex = document.getElementById("Space");
        var Excursionx = document.getElementById("Excursion");

        if (Excursionx.style.display === "block") {
          Excursionx.style.display = "none";
        } ;

        if (Teax.style.display === "block") {
          Teax.style.display = "none"; };

          if (Spacex.style.display === "block") {
            Spacex.style.display = "none"; } ;

      
        var Jedix = document.getElementById("Jedi");
        if (Jedix.style.display === "block") {
          Jedix.style.display = "none";
        } else {
          Jedix.style.display = "block";
        }
      };
      
      function showHideSpace() {
        var Teax = document.getElementById("Tea");
        var Jedix = document.getElementById("Jedi");
        var Excursionx = document.getElementById("Excursion");

        if (Excursionx.style.display === "block") {
          Excursionx.style.display = "none";
        } ;

        if (Teax.style.display === "block") {
          Teax.style.display = "none"; };

          if (Jedix.style.display === "block") {
            Jedix.style.display = "none"; } ;

        var Spacex = document.getElementById("Space");
        if (Spacex.style.display === "block") {
          Spacex.style.display = "none";
        } else {
          Spacex.style.display = "block";
        }
      };



      
      function showHideExcursion() {
        var Teax = document.getElementById("Tea");
        var Jedix = document.getElementById("Jedi");
        var Spacex = document.getElementById("Space");

        if (Teax.style.display === "block") {
          Teax.style.display = "none"; };

          if (Jedix.style.display === "block") {
            Jedix.style.display = "none"; } ;

            if (Spacex.style.display === "block") {
              Spacex.style.display = "none"; } ;

        var Excursionx = document.getElementById("Excursion");
        if (Excursionx.style.display === "block") {
          Excursionx.style.display = "none";
        } else {
          Excursionx.style.display = "block";
        }
      };