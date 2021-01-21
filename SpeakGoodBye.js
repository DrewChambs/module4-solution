
(function(window) {
      // Create the "byeSpeaker" object
      var byeSpeaker = {};
      // Variable to hold greeting
      var speakWord = "Good Bye";
      // Added method to produce diaplay
      byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name)
      }
      // Make object part of window object
      window.byeSpeaker = byeSpeaker;
})(window);
