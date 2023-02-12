let pitchShiftFlag = false;
let distortionFlag = false;
let vibratoFlag = false;

document.getElementById('synth').onclick = function () {
    const synth = new Tone.Synth().toDestination();

    const pitchShift = new Tone.PitchShift(7).toDestination();
    const distortion = new Tone.Distortion(0.8).toDestination();
    const vibrato = new Tone.Vibrato(5, 0.5).toDestination();

    if (pitchShiftFlag) synth.connect(pitchShift);
    if (distortionFlag) synth.connect(distortion);
    if (vibratoFlag) synth.connect(vibrato);

    synth.triggerAttackRelease('C4', '8n');
};

document.getElementById('pitch-shift').onclick = function () {
    if (!pitchShiftFlag) {
        this.style.backgroundColor = 'black';
    } else {
        this.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    pitchShiftFlag = !pitchShiftFlag;
};

document.getElementById('distortion').onclick = function () {
    if (!distortionFlag) {
        this.style.backgroundColor = 'black';
    } else {
        this.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    distortionFlag = !distortionFlag;
};

document.getElementById('vibrato').onclick = function () {
    if (!vibratoFlag) {
        this.style.backgroundColor = 'black';
    } else {
        this.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    vibratoFlag = !vibratoFlag;
};