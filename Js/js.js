window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  function change(color){
    document.documentElement.classList.toggle("color-change");
  }