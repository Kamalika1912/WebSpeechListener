var speechRecog = new window.webkitSpeechRecognition;
var recognizing = false;
var speechResult = '';
var interResult = '';

//console.log("JS test [Running]");

speechRecog.continuous = true;
speechRecog.interimResults = true;
speechRecog.maxAlternatives = 3;

speechRecog.onstart = function () {
    $(".mic").css("backgroundColor", "red");
    $(".mic button").text("Stop");
    recognizing = true;
}

speechRecog.onaudiostart = function () {
    console.log("Audio Started...");
}

speechRecog.onaudioend = function () {
    console.log("Audio Ended...");
    console.log("Stopped recording.");
    recognizing = false;
}

speechRecog.onspeechstart = function () {
    console.log("Speech Started...");
}

speechRecog.onspeechend = function () {
    console.log("Speech Ended...");
}

speechRecog.onsoundstart = function () {
    console.log("Sound Started...");
}

speechRecog.onsoundend = function () {
    console.log("Sound Ended...");
}

speechRecog.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; i += 1) {
        if (!event.results[i].isFinal) {
            interResult = event.results[i][0].transcript;
            console.log("Intermediate Result: " + interResult);
        } else {
            speechResult = event.results[i][0].transcript;
        }
    }
    conf = event.results[0][0].confidence.toPrecision(2) * 100 + '%';
    confidence.innerHTML = conf;
    result.innerHTML = speechResult;
    //console.log(speechResult);
    //speechRecog.stop();
    //console.log("Stopped recording.");
    //recognizing = false;
}

speechRecog.onend = function () {
    $(".mic").css("backgroundColor", "");
    $(".mic button").text("Start");
}

$(function () {
    $(".mic").on("click", function () {
        if (recognizing) {
            speechRecog.stop();
            recognizing = false;
            console.log("Stopped recording.");
        }
        else {
            speechRecog.start();
            console.log("Started recording...");
        }
    });
});