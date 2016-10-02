let logo = document.querySelector(".logo");
let bounds = document.querySelector(".game-bounds");
let interval;

function moveLogo(x, y) {
    logo.style.left = `${x}px`;
    logo.style.top = `${y}px`;
}

function centerLogo() {
    moveLogo( (bounds.offsetWidth - logo.offsetWidth) / 2,
              (bounds.offsetHeight - logo.offsetHeight) / 2 );
}

function bounceLogo(xVelocity, yVelocity) {
    if (interval) interval.clear();
    interval = setInterval(function() {
        let x = Math.min(bounds.offsetWidth - logo.offsetWidth,
            Math.max(parseFloat(logo.style.left) + xVelocity, 0));
        let y = Math.min(bounds.offsetHeight - logo.offsetHeight,
            Math.max(parseFloat(logo.style.top) + yVelocity, 0));

        moveLogo(x, y);

        if (x === bounds.offsetWidth - logo.offsetWidth || x === 0) {
            xVelocity = -xVelocity;
        }
        if (y === bounds.offsetHeight - logo.offsetHeight || y === 0) {
            yVelocity = -yVelocity;
        }
    }, 10);
}

centerLogo();

$(".button.play-game").on("click", function() {
    centerLogo();
    bounceLogo(1, 1);
});

