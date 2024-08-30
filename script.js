// Initialize or retrieve counters for each event from localStorage
const events = ['wrestling', 'horse-racing', 'battle-royale', 'chariot-racing', 'archer-deathmatch'];

let redTotalPoints = 0;
let blueTotalPoints = 0;
let redEventsLeading = 0;
let blueEventsLeading = 0;

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
	
    // Calculate total points
    redTotalPoints += redEventScore;
    blueTotalPoints += blueEventScore;

    // Determine which team is leading in each event
    if (redEventScore > blueEventScore) {
        redEventsLeading++;
    } else if (blueEventScore > redEventScore) {
        blueEventsLeading++;
    }
});

// Function to increment event counters
function incrementEvent(event, value) {
    const currentCount = parseInt(localStorage.getItem(event)) || 0;
    const newCount = currentCount + value;

    localStorage.setItem(event, newCount);
    document.getElementById(`${event}-count`).innerText = newCount;
}

// Function to manually set the score
function setEventScore(event) {
    const inputField = document.getElementById(`${event}-set`);
    const newScore = parseInt(inputField.value);

    if (!isNaN(newScore)) {
        localStorage.setItem(event, newScore);
        document.getElementById(`${event}-count`).innerText = newScore;
        inputField.value = ''; // Clear the input field after setting the score
    }
}

// Display the total points and events leading
document.getElementById('red-total-points').innerText = redTotalPoints;
document.getElementById('blue-total-points').innerText = blueTotalPoints;
document.getElementById('red-events-leading').innerText = redEventsLeading;
document.getElementById('blue-events-leading').innerText = blueEventsLeading;

// Change background color based on the team leading in total points
if (redTotalPoints > blueTotalPoints) {
    document.body.style.backgroundColor = '#ff4c4c';
} else if (blueTotalPoints > redTotalPoints) {
    document.body.style.backgroundColor = '#4c4cff';
} else {
    document.body.style.backgroundColor = '#444'; // Neutral color if tied
}
