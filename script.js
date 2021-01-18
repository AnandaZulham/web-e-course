// Ambil Elemen sidebar
const sidebar = document.querySelector('.sidebar')
//Ambil Elemen Button Sidebat
const buttonsidebar = document.querySelector('.fas.fa-bars.button-sidebar')
//Ambil Elemen ButtonClose
const buttonclose = document.querySelector('close')

// 
window.addEventListener('click', function(e) {
    e.preventDefault
    if(e.target.className === 'fas fa-bars button-sidebar'){
        buttonsidebar.style.display ='none'
        sidebar.style.right = '10px'
    }
    // Pada Saat Tombol close di tutup sidebar  pindah ke kanan
    if(e.target.className === 'fas fa-2x fa-window-close close') {
        sidebar.style.right ='-300px'
        buttonsidebar.style.transitionDelay = '12s'
        buttonsidebar.style.display = 'inline'
    }
})


