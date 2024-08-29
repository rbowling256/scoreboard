// Initialize counters from localStorage or set to 0 if not present
let redCount = localStorage.getItem('redCount') ? parseInt(localStorage.getItem('redCount')) : 0;
let blueCount = localStorage.getItem('blueCount') ? parseInt(localStorage.getItem('blueCount')) : 0;

document.getElementById('red-count').innerText = redCount;
document.getElementById('blue-count').innerText = blueCount;

// Increment function
function increment(color, value) {
    if (color === 'red') {
        redCount += value;
        localStorage.setItem('redCount', redCount);
        document.getElementById('red-count').innerText = redCount;
    } else if (color === 'blue') {
        blueCount += value;
        localStorage.setItem('blueCount', blueCount);
        document.getElementById('blue-count').innerText = blueCount;
    }
}

// Function to manually set counter values
function setCounter(color) {
    const inputField = document.getElementById(`${color}-input`);
    const newValue = parseInt(inputField.value);
    if (!isNaN(newValue)) {
        if (color === 'red') {
            redCount = newValue;
            localStorage.setItem('redCount', redCount);
            document.getElementById('red-count').innerText = redCount;
        } else if (color === 'blue') {
            blueCount = newValue;
            localStorage.setItem('blueCount', blueCount);
            document.getElementById('blue-count').innerText = blueCount;
        }
    }
}

// Function to update total score
function updateTotal(color) {
    let total = 0;

    const events = [
        'wrestling',
        'horse-racing',
        'battle-royale',
        'chariot-racing',
        'archer-deathmatch'
    ];

    events.forEach(event => {
        const score = parseInt(document.getElementById(`${color}-${event}`).value) || 0;
        total += score;
    });

    document.getElementById(`${color}-total`).innerText = total;
}
