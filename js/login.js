function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        transitionToPage('main.html');
    }
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.transition = 'opacity 0.5s ease'; // Add transition effect
    document.querySelector('body').style.opacity = 0; // Fade out

    setTimeout(function() {
        window.location.href = href;
    }, 500);
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1;
});