//https://teachablemachine.withgoogle.com/models/cjFIseYlK/

prediction_1 = ""
prediction_2 = ""

Webcam.set({
height: 300,
width: 350,
image_format: 'png',
png_quality: 90
});
camera = document.getElementById("camera");

Webcam.attach('#camera')

function takepicture(){

Webcam.snap(function(datauri){
document.getElementById("result").innerHTML = '<img id ="capturedimage" src ="'+datauri+'"/>';
});
}


console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cjFIseYlK/model.json', modelLoaded);

function modelLoaded(){
console.log("Model is Loaded")
}


function speak(){

synth = window.speechSynthesis
speak_data_1= "The first predicion is"+prediction_1;
speak_data_2= "and the second predicion is"+prediction_2;

utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
snyth.speak(utterthis)
}