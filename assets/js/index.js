const unitEl = document.getElementById('unit-input');
const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');
const convertBtn = document.getElementById('convert-btn');
const errorEl = document.getElementById('error');
const clearBtn = document.getElementById('clear-btn');

lengthEl.textContent = 0;
volumeEl.textContent = 0;
massEl.textContent = 0;

let unit = 0;
convert(unit);

convertBtn.addEventListener('click', function () {
  unit = unitEl.value;

  if (unit > 0) {
    convert(unit);
    errorEl.textContent = 'Insert a number to convert';
  } else {
    errorEl.textContent = 'Please insert a positive number';
  }
});

clearBtn.addEventListener('click', function () {
  unitEl.value = '';
  unit = 0;
  convert(unit);
});

function convert(unit) {
  convertLength(unit);
  convertVolume(unit);
  convertMass(unit);
}

function convertLength(unit) {
  let meterToFeet = unit * 3.28084;
  let feetToMeter = unit * 0.3048;

  return (lengthEl.textContent = `${unit} meters = ${meterToFeet.toFixed(
    3
  )} feet | ${unit} feet = ${feetToMeter.toFixed(3)} meters`);
}
function convertVolume(unit) {
  let literToGallon = unit * 0.264172;
  let gallonToLiters = unit * 3.78541;

  return (volumeEl.textContent = `${unit} liters = ${literToGallon.toFixed(
    3
  )} gallons | ${unit} gallons = ${gallonToLiters.toFixed(3)} liters`);
}
function convertMass(unit) {
  let kgToPounds = unit * 2.20462;
  let poundsToKg = unit * 0.453592;

  return (massEl.textContent = `${unit} kilos = ${kgToPounds.toFixed(
    3
  )} pounds | ${unit} pounds = ${poundsToKg.toFixed(3)} kilos`);
}
