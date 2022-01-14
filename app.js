import sampleSample from './samples/sampleSample.js';

const samplesList = document.getElementById("samplesList")
const samples = [
    `<p id="but1">Click me.</p>`
];

samples.forEach((sample) => {
    samplesList.innerHTML += sample;
    document.getElementById("but1").addEventListener("click", sampleSample);
});