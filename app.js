const links = document.querySelector('.links');
const  navToggle = document.querySelector('.nav-toggle');


// toggle navigation
navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
});


// navToggle.addEventListener('click', function () {
//     const toggleBtn = links.classList.contains('show-links');
//     if (toggleBtn) {
//         links.classList.remove('show-links');
//     } else{
//         links.classList.add('show-links');
//     }
// });