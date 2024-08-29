let redCount = 0;
let blueCount = 0;

function increment(color, value) {
    if (color === 'red') {
        redCount += value;
        document.getElementById('red-count').innerText = redCount;
    } else if (color === 'blue') {
        blueCount += value;
        document.getElementById('blue-count').innerText = blueCount;
    }
}
