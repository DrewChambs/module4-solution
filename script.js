

( function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// Loop through array and select names for display
for (var i = 0; i < names.length; i++) {
  // Separate first letter of string, convert to lowercase in order to compare to other letters
  var firstLetter = names[i].charAt(0).toLowerCase();
  // Search for first letter of all in names array
  if (firstLetter === "j") {
    // Apply method to selected names for display
    byeSpeaker.speak(names[i]);
  } else {
    // Apply method to selected names for display
    helloSpeaker.speak(names[i]);
  }
};})();
