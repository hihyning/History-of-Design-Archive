// Function to store the user's name in local storage
function storeName() {
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
    }
}

function storeName() {
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
