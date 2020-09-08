var nav = document.getElementById('nav_bar');

var zoom = mediumZoom('.zoom', {
    margin: 50,
    background: '#000',
    scrollOffset: 0
})

zoom.on(
    'open',
    function(event) {
        nav.classList.add('menu_hidden');
    },
);

zoom.on('closed', function(event) {
    nav.classList.remove('menu_hidden');
});

$('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
});

