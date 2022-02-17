document.querySelectorAll('.video-links').forEach(links  =>{
    links.addEventListener('cklick',(e) =>{
       e.preventDefault(); 
       var src =links.getAttribute('href');
       document.querySelector('.video').src = src;
       document.querySelector('.video').play();

     });
}
    );