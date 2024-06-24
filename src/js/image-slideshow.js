var mainMenu = document.getElementById("imageSlideshow");
var lenImage = 5;
for (let i = 0; i < lenImage; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", 'profile-image-slide');
    if (i == 0) {
        box.classList.add("active");
    }
    let image = document.createElement("img");
    image.setAttribute("src", "src/image/bg-profile-" + (i + 1) + ".jpg");
    image.setAttribute("alt", "My Image Profile");
    image.setAttribute("class", "banner-cover banner-slideshow-img image-profile-" + (i + 1));

    box.appendChild(image);
    mainMenu.appendChild(box);
}


slideIndex = slidePrevious = 0;
start = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("profile-image-slide");
    slideIndex++;
    if (start > 0) {
        for (i = 0; i < lenImage; i++) {
            slides[i].classList.remove("active", "fadeIn", "fadeOut");
        }

        slidePrevious = slideIndex - 1;
        if (slidePrevious < 1) { slidePrevious = lenImage }
        if (slideIndex > lenImage) { slideIndex = 1 }
        slides[slidePrevious - 1].classList.add("fadeOut", "active");
        slides[slideIndex - 1].classList.add("fadeIn", "active");
    } else {
        start++;
    }
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}