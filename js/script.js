function reveal() {
    var reveals = document.querySelectorAll(".about");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("about-animation");
      } else {
        reveals[i].classList.remove("about-animation");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);