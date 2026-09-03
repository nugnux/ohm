// Grab DOM elements
const voltText = document.querySelector('#voltageDisplay');
const currText = document.querySelector('#currentDisplay');

// Simulation parameters
let voltage = 3.32;
const circuitResistance = 313.2; // Ohms (V / I = 3.32V / 10.6mA)

// Update loop (runs every 400ms)
setInterval(() => {
  // Add slight natural noise/fluctuation
  const jitter = (Math.random() - 0.5) * 0.08;
  voltage = Math.max(0.1, voltage + jitter);
  
  // Calculate Current via Ohm's Law: I = (V / R) * 1000 (mA)
  const currentMA = (voltage / circuitResistance) * 1000;

  // Render to AR elements
  voltText.setAttribute('value', `${voltage.toFixed(2)} V`);
  currText.setAttribute('value', `${currentMA.toFixed(1)} mA`);
}, 400);

/*
// --- If connecting directly to ESP32 WebSocket: ---
const socket = new WebSocket('ws://192.168.4.1:81'); // Or cloud WSS broker
socket.onmessage = (event) => {
  const data = JSON.parse(event.data); // Expecting { v: 3.32, i: 10.6 }
  voltText.setAttribute('value', `${parseFloat(data.v).toFixed(2)} V`);
  currText.setAttribute('value', `${parseFloat(data.i).toFixed(1)} mA`);
};
*/
