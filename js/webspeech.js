var speechRecog = new window.webkitSpeechRecognition;
var recognizing = false;
var speechResult = '';

//console.log("JS test [Running]");

speechRecog.continuous = true;
speechRecog.interimResults = false;

speechRecog.onstart = function () {
    $(".mic").css("backgroundColor", "red");
    $(".mic button").text("Stop");
    recognizing = true;
}

speechRecog.onresult = function (event) {
    speechResult = event.results[0][0].transcript;
    conf = event.results[0][0].confidence;
    confidence.innerHTML = conf;
    result.innerHTML = speechResult;
    console.log(speechResult);
    speechRecog.stop();
    console.log("Stopped recording.");
    recognizing = false;
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