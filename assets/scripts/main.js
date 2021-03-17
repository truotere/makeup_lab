/// Initialize element objects

// Input Field & Slider
var volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");

// Volume Icon
var volumeImage = document.getElementById("volume-image");

// Sound Image
var soundImage = document.getElementById("sound-image");

// Sound
var sound = document.getElementById("horn-sound");

// Radio Horn Buttons
var airButton = document.getElementById("radio-air-horn");
var carButton = document.getElementById("radio-car-horn");
var partyButton = document.getElementById("radio-party-horn");

// Honk Button
var honkButton = document.getElementById("honk-btn");




// Connect slider to volume input. Update volume icon.
function updateVolumeValue() {

    volumeNumber.value = volumeSlider.value;

    if (volumeNumber.value == 0) {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    } else if (1 <= volumeNumber.value && volumeNumber.value <= 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    } else if (34 <= volumeNumber.value && volumeNumber.value <= 66) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
}

// Connect volume input to slider. Update volume icon.
function updateSlider() {

    // Empty input field
    if (volumeNumber.value === "") {
        volumeSlider.value = 0;
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";

    // Input Field Range 1 to 100
    } else {
        if (volumeNumber.value == 0) {
            volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        } else if (1 <= volumeNumber.value && volumeNumber.value <= 33) {
            volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        } else if (34 <= volumeNumber.value && volumeNumber.value <= 66) {
            volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        } else if (67 <= volumeNumber.value && volumeNumber.value <= 100) {
            volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        } else {
            volumeNumber.value = 100;
        }
        volumeSlider.value = volumeNumber.value;
    }
}

// Synchronize input field and slider
volumeNumber.addEventListener("input", updateSlider);
volumeSlider.addEventListener("click", updateVolumeValue);

// Change sound images and corresponding sound
function setSound() {
    if (airButton.checked) {
        soundImage.src = "./assets/media/images/air-horn.svg";
        sound.src = "./assets/media/audio/air-horn.mp3";
    } else if (carButton.checked) {
        soundImage.src = "./assets/media/images/car.svg";
        sound.src = "./assets/media/audio/car-horn.mp3";
    } else {
        soundImage.src = "./assets/media/images/party-horn.svg";
        sound.src = "./assets/media/audio/party-horn.mp3";
    }
}

// Synchronize radio buttons, images, and sounds
airButton.addEventListener("click", setSound);
carButton.addEventListener("click", setSound);
partyButton.addEventListener("click", setSound);

// Honk Button
function clickButton (hold) {
    hold.preventDefault();
    sound.volume = volumeNumber.value / 100;
    sound.play();
}

// Play corresponding horn sound
honkButton.addEventListener("click", clickButton);


