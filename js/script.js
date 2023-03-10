window.addEventListener("scroll", function(){
      header= document.querySelector("header");
      if(header.classList.toggle("fixed", window.scrollY >0)){
        
      }
})
