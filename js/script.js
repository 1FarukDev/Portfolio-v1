function reveal() {
    var reveals = document.querySelectorAll(".about-para, .about-text");
  
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
  function reveal2() {
    var reveals = document.querySelectorAll(".about-stack");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("stack-animation");
      } else {
        reveals[i].classList.remove("stack-animation");
      }
    }
  }
  
  window.addEventListener("scroll", reveal2);
  function experience() {
    var reveals = document.querySelectorAll(".experience");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("experience-animation");
      } else {
        reveals[i].classList.remove("experience-animation");
      }
    }
  }
  
  window.addEventListener("scroll", experience);