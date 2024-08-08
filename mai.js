//let menuItems = document.getElementsByClassName('menu-items');
let menuItems = document.querySelector('.menu-items');
let menuIcon = document.querySelector('.menu-icons');
let open = document.querySelector('.open');
let close = document.querySelector('.close');

menuIcon.addEventListener('click', function () {
    menuItems.classList.toggle('active');
    // close.classList.toggle('active');
    
    if (close.style.display == 'inline') {
         close.style.display = 'none';
         open.style.display = 'inline';
    } else {
        open.style.display = 'none';
        close.style.display = 'inline';
    }

    //alert('Clicked')
});