import sampleSample from './samples/sampleSample.js';

const samplesList = document.getElementById("samplesList")

const samples = [
    {
        id: 'Sample sample',
        fun: sampleSample
    }
];

samples.forEach((sample) => {
    const html = `<p id="${sample.id}">${sample.id}</p>`;
    samplesList.innerHTML += html;
    document.getElementById(`${sample.id}`).addEventListener("click", sample.fun);
});