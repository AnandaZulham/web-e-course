const sidebar = document.querySelector('.sidebar');

window.addEventListener('click', function(e) {
    e.preventDefault
    if(e.target.className === 'fas fa-bars button-sidebar'){
       sidebar.classList.toggle('sidebar-toggle')
    }
})
