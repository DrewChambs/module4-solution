
// Create IIFE to immediately invoke function
(function (window){
      // Create the "helloSpeaker" object
      var helloSpeaker = {};
      // Variable to hold greeting
      var speakWord = "Hello";
      // Added method to produce diaplay
      helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
      }
      // Make object part of window object
    window.helloSpeaker = helloSpeaker;
})(window);
