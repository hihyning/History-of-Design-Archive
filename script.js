// Function to store the user's name in local storage
function storeName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value;

    if (name) {
        localStorage.setItem('userName', name);
        // Redirect to the main page of your website
        window.location = 'home.html'
        var mainDiv = document.getElementById("mainDiv");
        var userInput = document.getElementById("userInput");
        userInput.style.display = "none";
        mainDiv.style.display = "block";
        const userNameElement = document.getElementById('userName');
        userNameElement.textContent = name;
    }
}

function storeName2() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value;

    if (name) {
        localStorage.setItem('userName', name);
        // Redirect to the main page of your website
        var mainDiv = document.getElementById("mainDiv");
        var userInput = document.getElementById("userInput");
        userInput.style.display = "none";
        mainDiv.style.display = "block";
        const userNameElement = document.getElementById('userName');
        userNameElement.textContent = name;

        // Change the color of the userName text
        userNameElement.style.color = 'red'; // Replace 'blue' with your desired color
        userNameElement.style.fontStyle = 'italic';
        userNameElement.style.fontWeight = 'bold'; // You can also use numeric values like '700'
        userNameElement.style.textTransform = 'uppercase';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');

    window.addEventListener('scroll', function () {
        // Calculate the scroll ratio
        let scroll = window.scrollY;
        let scrollRatio = scroll / window.innerWidth;

        // Apply the parallax effect by translating elements
        carousel.querySelectorAll('.item').forEach((item, index) => {
            let intensity = index % 2 === 0 ? -0.5 : 0.5; // Alternate intensity for effect
            let translateX = scrollRatio * intensity * 100; // Adjust 100 to control effect intensity
            item.style.transform = `translateX(${translateX}px)`;
        });
    });
});

//STREAMLINING 

//POP ART
document.addEventListener('DOMContentLoaded', function () {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach((tile, index) => {
        tile.addEventListener('mouseover', () => {
            setTimeout(() => {
                tile.classList.add('flipped');
            }, index * 100); // Delay increases by 100ms for each tile
        });

        tile.addEventListener('mouseout', () => {
            setTimeout(() => {
                tile.classList.remove('flipped');
            }, index * 100); // Same staggered delay for mouse out
        });
    });
});
function flipPage() {
    document.querySelector('.page-flip5').style.transform = 'rotateY(180deg)'; // Apply the flip

    setTimeout(() => {
        window.location.href = 'pop.html'; // Redirect to the next page
    }, 1000); // Set timeout to match the CSS transition time
}
document.addEventListener('DOMContentLoaded', function() {
    var shapes = document.querySelectorAll('.shape');
    shapes.forEach(function(shape, index) {
        // Set the animation delay based on the index (position in the list)
        // For example, the first shape has a delay of 0s, the second 0.5s, and so on
        var delay = index * 0.3; // Adjust the multiplier (0.5) to control the delay between each shape
        shape.style.animationDelay = delay + 's';
    });
});
document.getElementById('btn btn-danger').addEventListener('click', function() {
    var fadeOverlay = document.createElement('div');
    fadeOverlay.id = 'fadeOverlay';
    document.body.appendChild(fadeOverlay);

    // Start fade to black
    setTimeout(function() {
        fadeOverlay.style.opacity = '1';
    }, 100); // Short delay to ensure overlay is rendered before fading

    // After fade, start radial transition
    setTimeout(function() {
        var radialDiv = document.createElement('div');
        radialDiv.id = 'radialTransition';
        document.body.appendChild(radialDiv);
        radialDiv.style.transform = 'translate(-50%, -50%) scale(50)';
    }, 600); // Start after the fade transition ends

    // Redirect after the radial transition
    setTimeout(function() {
        window.location.href = 'index.html'; // Change to your next page URL
    }, 1100); // This delay should be the sum of the fade and radial transition durations
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link behavior
            const href = this.getAttribute('href');

            // Fade-out effect, then navigate
            const wrapper = document.getElementById('page-wrapper');
            wrapper.style.opacity = 0;

            setTimeout(() => {
                window.location.href = href;
            }, 5000); // Corresponds to the CSS animation duration
        });
    });
});



