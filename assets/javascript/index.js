const messageContainer = document.getElementById("message-container");
const galleryImage = document.getElementById("gallery-image");

let imageCount = 1;

function hideMessage() {

    messageContainer.style.display = "none";

}

function showMessage() {

    messageContainer.style.display = "block";

}

function nextImage() {

    imageCount++;

    imageCount %= 4;

    if (imageCount === 0) {
        imageCount = 4;
    }

    galleryImage.src = `./assets/images/gallery/${imageCount}.png`;

}
