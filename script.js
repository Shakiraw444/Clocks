// Digital clock update
function updateDigitalClock() {
    const digitalElement = document.getElementById("digital");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    digitalElement.textContent = `${hours}:${minutes}:${seconds}`;
}
  // Analog clock update
function updateAnalogClock() {
    const now = new Date();
    // Calculate hour, minute, second angles
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30; // 360° / 12 hours
    const minuteAngle = minutes * 6; // 360° / 60 minutes
    const secondAngle = seconds * 6; // 360° / 60 seconds
    // Set the rotation for the hands
    document.getElementById("hour-hand").style.transform = `rotate(${hourAngle}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minuteAngle}deg)`;
    document.getElementById("second-hand").style.transform = `rotate(${secondAngle}deg)`;
}
  // Initialize both clocks and update every second
function initClocks() {
    setInterval(updateDigitalClock, 1000);
    setInterval(updateAnalogClock, 1000);
    updateDigitalClock(); // Update immediately
    updateAnalogClock();  // Update immediately
}

  initClocks();
  