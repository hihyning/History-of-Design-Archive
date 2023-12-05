const object = document.getElementById("object");

// Initial position of the object
let posX = 0;
let posY = 0;

// Move the object using arrow keys
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            posY -= 10;
            break;
        case "ArrowDown":
            posY += 10;
            break;
        case "ArrowLeft":
            posX -= 10;
            break;
        case "ArrowRight":
            posX += 10;
            break;
    }

    // Update the object's position
    object.style.transform = `translate(${posX}px, ${posY}px)`;
});
