document.addEventListener('DOMContentLoaded', function() {
    var shapes = document.querySelectorAll('.shape');
    shapes.forEach(function(shape) {
        shape.addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var shapes = document.querySelectorAll('.shape');
    shapes.forEach(function(shape, index) {
        // Set the animation delay based on the index (position in the list)
        // For example, the first shape has a delay of 0s, the second 0.5s, and so on
        var delay = index * 0.3; // Adjust the multiplier (0.5) to control the delay between each shape
        shape.style.animationDelay = delay + 's';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.getElementById('clickable-h1');
    var h2 = document.querySelector('.text-container h2');
    var h3 = document.querySelector('.text-container h3');

    var newText = document.getElementById('new-text');

    h1.addEventListener('click', function() {
        h1.style.display = 'none'; // Hide h1
        h2.style.display = 'none'; // Hide h2
        h3.style.display = 'none'; // Hide h2
        newText.style.display = 'block'; // Show new text
    });
});
