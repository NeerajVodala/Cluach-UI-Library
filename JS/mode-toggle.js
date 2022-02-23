const modeSwitch = document.getElementById("mode-switch");
let lightMode = localStorage.getItem('lightmode');

if (lightMode === 'enabled') {
    lightModeOn();
}

modeSwitch.addEventListener("click", checkMode);

function checkMode() {
    lightMode = localStorage.getItem('lightmode');
    if (lightMode === "enabled") {
        lightModeOff();
    } else {
        lightModeOn();
    }
}

function lightModeOn() {
    localStorage.setItem('lightmode', 'enabled');
    document.body.classList.add("light-mode");
    modeSwitch.innerHTML = `<i class="fas fa-moon fa-lg"></i>`
}

function lightModeOff() {
    localStorage.setItem('lightmode', null);
    document.body.classList.remove("light-mode");
    modeSwitch.innerHTML = `<i class="fas fa-sun fa-lg"></i>`
}