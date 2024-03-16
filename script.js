// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", function() {
    playBackgroundMusic();
});

// Play the background music
function playBackgroundMusic() {
    const music = document.getElementById("backgroundMusic");
    music.play().catch(e => console.error("Autoplay prevented"));
}

// Attach event listener to resolution selector
document.getElementById("resolutionSelector").addEventListener("change", function() {
    const selectedOption = this.value;
    const image = document.getElementById("dynamicImage");

    // Play the background music if it's not already playing
    playBackgroundMusic();

    // Fade out the image
    fadeOut(image);

    // Wait for the fade-out effect to complete before changing the image source
    setTimeout(() => {
        changeImageSource(selectedOption, image);
        // Fade in the image after changing the source
        fadeIn(image);
    }, 500);
});

// Fade out the element by reducing its opacity to 0
function fadeOut(element) {
    element.style.opacity = 0;
}

// Fade in the element by increasing its opacity to 1
function fadeIn(element) {
    element.style.opacity = 1;
}

// Change the image source based on the selected resolution
function changeImageSource(selectedOption, image) {
    switch (selectedOption) {
        case '144p':
            image.src = './image/144p.webp'; // Placeholder image for 144p
            break;
        case '480p':
            image.src = './image/480p.webp'; // Placeholder image for 480p
            break;
        case '720p':
            image.src = './image/720p.webp'; // Placeholder image for 720p
            break;
        case '1080p':
            image.src = './image/1080p.webp'; // Placeholder image for 1080p
            break;
        case 'me':
            image.src = './image/me.jpg'; // Placeholder or special image for "me"
            break;
        default:
            image.src = './image/144p.webp'; // Default image
    }
}
