window.addEventListener('DOMContentLoaded', function () {
    const to_glow = document.querySelectorAll('.glow');  
    const projectSection = document.querySelector('.projects');
    const aboutHeader = document.querySelector('.lft-box-two');

    
    
    to_glow.forEach(function (element) {
      element.addEventListener('click', function () {
        showglow(element);
      });
    });
    
    function showglow(element) {
      
      if (element.dataset.box === 'project') {
        projectSection.classList.add('background-glow'); 
        setTimeout(function() {
            projectSection.classList.remove('background-glow');
          }, 2000); 
      } else if (element.dataset.box === 'about') {
        aboutHeader.classList.add('background-glow');
        setTimeout(function() {
            aboutHeader.classList.remove('background-glow'); 
          }, 2000);
      }

    }





  });
  