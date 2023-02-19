const image = document.querySelector('img');
image.addEventListener('mousedown', (event) => {
    image.style.position = 'absolute'
    moveAt(event.pageX, event.pageY) 
    function moveAt(pageX, pageY) {
        image.style.left = pageX - image.offsetWidth / 2 + 'px';
        image.style.top = pageY - image.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    } 

    document.addEventListener('mousemove', onMouseMove);  
    image.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image.onmouseup = null;
    };

    image.ondragstart = function() {
        return false;
    };
}) 
 

   
    
   
    
   
  
 
  
  