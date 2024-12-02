//portfolio
window.addEventListener('DOMContentLoaded', function () {
    const to_glow = document.querySelectorAll('.glow');  
    const projectSection = document.querySelector('.projects');
    const aboutHeader = document.querySelector('.lft-box-two');
  
//to glow option which user can select
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

var elements = document.getElementsByClassName('popup-project');

elements.addEventListener('click', function(){
  if(this.classList.contains('whitepace')){
    document.querySelector('.display').style.display = 'block';
  }

  


});


});
  