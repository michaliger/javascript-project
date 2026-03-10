const button = document.querySelector('#stop');
button.addEventListener('click',(e)=>{
     e.preventDefault();
    const containerstop = document.querySelector('.container-stop');
    containerstop.style.display = 'flex';
    const main = document.querySelector('main');
    main.style.opacity = 0.1;
    const close = document.querySelector('#close');
    close.addEventListener('click',()=>{
        containerstop.style.display = 'none';
        main.style.opacity = 1;
    })
});