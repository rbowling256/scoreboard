// Initialize or retrieve counters for each event from localStorage
const events = ['wrestling', 'horse-racing', 'battle-royale', 'chariot-racing', 'archer-deathmatch'];

events.forEach(event => {
    const redEventScore = localStorage.getItem(`red-${event}`) ? parseInt(localStorage.getItem(`red-${event}`)) : 0;
    const blueEventScore = localStorage.getItem(`blue-${event}`) ? parseInt(localStorage.getItem(`blue-${event}`)) : 0;

    // Update counters on the main page
    if (document.getElementById(`red-${event}-count`)) {
        document.getElementById(`red-${event}-count`).innerText = redEventScore;
    }
    if (document.getElementById(`blue-${event}-count`)) {
        document.getElementById(`blue-${event}-count`).innerText = blueEventScore;
    }

    // Update scores on the event scores page
    if (document.getElementById(`red-${event}-score`)) {
        document.getElementById(`red-${event}-score`).innerText = redEventScore;
    }
    if (document.getElementById(`blue-${event}-score`)) {
        document.getElementById(`blue-${event}-score`).innerText = blueEventScore;
    }
});

// Function to increment event counters
function incrementEvent(event, value) {
    const currentCount = parseInt(localStorage.getItem(event)) || 0;
    const newCount = currentCount + value;

    localStorage.setItem(event, newCount);
    document.getElementById(`${event}-count`).innerText = newCount;
}
