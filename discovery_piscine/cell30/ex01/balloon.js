const balloon = document.getElementById('ball');
let size = 200;
let colorIndex = 0;
let hover = false;
let reverseColors = false;

function changeSize() {
    size += 10;
    if (size > 420) {
        size = 200; 
        colorIndex = 0; 
    }
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
}


function changeColor() {
    const colors = ['red', 'green', 'blue'];
    balloon.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    
}
function reverseColorsO() {
    const colors = ['red', 'green', 'blue'];
    balloon.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
}

function shrinkBalloon() {
    if (size > 200 && !hover) {
        size -= 5;
        if (size < 200) size = 200; 
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        reverseColors = true;
        reverseColorsO();
        changeColor();
    }
}

balloon.addEventListener('click', () => {
    changeSize();
    changeColor();
});

balloon.addEventListener('mouseenter', () => {
    hover = true;
});

balloon.addEventListener('mouseleave', () => {
    hover = false;
    shrinkBalloon();
    reverseColorsO(); 
});