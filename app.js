import sampleSample from './samples/sampleSample.js';
import settingThisInFunctions from './samples/settingThisInFunctions.js';

const COOKIE_NAME_SELECTED_SAMPLE_ID = 'selectedSampleId';

const samplesList = document.getElementById("samplesList")

const samples = [
    {
        id: 'Sample sample',
        fun: sampleSample
    },
    {
        id: 'Setting this in functions',
        fun: settingThisInFunctions
    }
];

samples.forEach((sample) => {
    const html = `<p id="${sample.id}">${sample.id}</p>`;
    samplesList.innerHTML += html;
    document.getElementById(`${sample.id}`).addEventListener("click", function () {
        document.cookie = `${COOKIE_NAME_SELECTED_SAMPLE_ID}=${sample.id}`;
        runSelectedSample();
    });
});

function runSelectedSample() {
    const selectedSampleId = getCookieValueByName(COOKIE_NAME_SELECTED_SAMPLE_ID);
    if (!selectedSampleId) { return; }
    const sample = samples.find(sample => sample.id === selectedSampleId);
    if (sample) {
        sample.fun();
    }
}

function getCookieValueByName(cookieName) {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(cookieName));
    if (!cookie) { return null; }
    const value = cookie.split('=')[1];
    return value;
}

runSelectedSample();