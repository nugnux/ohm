// Grab the 2D text element from the 3D scene
const variableDisplay = document.querySelector('#liveVariable');

// --- OPTION A: Simulate live readings (updates every 500ms) ---
let simulatedValue = 0.0;

setInterval(() => {
  // Generate a random reading between 0.00 and 5.00
  simulatedValue = (Math.random() * 5.0).toFixed(2);

  // Update the 2D variable text in the AR scene
  variableDisplay.setAttribute('value', `${simulatedValue} V`);
}, 500);


// --- OPTION B: Live Hardware/WebSocket Stream (Uncomment when ready) ---
/*
const socket = new WebSocket('ws://192.168.4.1:81'); // Your ESP32 / Server IP

socket.onmessage = (event) => {
  const data = parseFloat(event.data);
  variableDisplay.setAttribute('value', `${data.toFixed(2)} V`);
};
*/
