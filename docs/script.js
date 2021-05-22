"use strict";

var language1 = document.getElementById('hablaren');
var language2 = document.getElementById('hablares');
var language3 = document.getElementById('hablarde');
var language4 = document.getElementById('hablarja');
var language5 = document.getElementById('hablarpo'); //Inglés boton //

language1.addEventListener('click', function () {
  decir(document.getElementById('texto'));
});

function decir(texto) {
  var utterance = new SpeechSynthesisUtterance(texto.value);
  utterance.lang = 'en';
  speechSynthesis.speak(utterance);
} //Español boton //


language2.addEventListener('click', function () {
  decir1(document.getElementById("texto"));
});

function decir1(texto) {
  var utterance = new SpeechSynthesisUtterance(texto.value);
  utterance.lang = 'es';
  speechSynthesis.speak(utterance);
} //alemán boton //


language3.addEventListener("click", function () {
  decir2(document.getElementById("texto"));
});

function decir2(texto) {
  var utterance = new SpeechSynthesisUtterance(texto.value);
  utterance.lang = 'de';
  speechSynthesis.speak(utterance);
} //japones boton //


language4.addEventListener("click", function () {
  decir3(document.getElementById("texto"));
});

function decir3(texto) {
  var utterance = new SpeechSynthesisUtterance(texto.value + 1);
  utterance.lang = 'ja';
  speechSynthesis.speak(utterance);
} //portugués boton //


language5.addEventListener("click", function () {
  decir4(document.getElementById("texto"));
});

function decir4(texto) {
  var utterance = new SpeechSynthesisUtterance(texto.value);
  utterance.lang = 'pt';
  speechSynthesis.speak(utterance);
}