"use strict";

var language1 = document.getElementById('hablaren');
var language2 = document.getElementById('hablares');


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


