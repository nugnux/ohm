// app.js

// 1. Locate the dynamic text components within the A-Frame scene
const voltText = document.getElementById('voltValue');
const currText = document.getElementById('currValue');

// --- Simulation Logic ---

let voltage = 3.3; // Starting voltage (V)
const resistance = 314; // The physical resistance (example placeholder: 314 Ohms)

// 2. A simple loop that updates values every 500ms
setInterval(() => {
    // a. Simulate fluctuations in voltage (between -0.05V and +0.05V)
    const drift = (Math.random() - 0.5) * 0.1;
    voltage = Math.max(1.0, Math.min(5.0, voltage + drift)); // Clamp between 1V and 5V

    // b. Perform a dynamic Ohm's Law calculation: I = V / R (mA)
    // Mult by 1000 to convert Amps to milliamps
    const currentMA = (voltage / resistance) * 1000;

    // c. Format the numbers for clean display
    // dtostrf equivalent: toFixed(2)
    const formattedVolt = voltage.toFixed(2);
    const formattedCurr = currentMA.toFixed(1);

    // 3. Set the new values into the A-Frame text entities
    voltText.setAttribute('value', `${formattedVolt} V`);
    currText.setAttribute('value', `${formattedCurr} mA`);

}, 500); // Update frequency in milliseconds
