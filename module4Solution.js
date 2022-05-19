(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
    
      
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    })();
    //STEP TWO
var speakWord = ("Hello");

(function speak(name) {
  console.log(speakWord + " " + name);
})();

//STEP THREE
var helloSpeaker = { speak: function (name){
    console.log(helloSpeaker + " " + name);
}
}
speak.helloSpeaker = helloSpeaker;

//STEP SIX
var speakWord = "Good Bye";

(function speak(name) {
  console.log(speakWord + " " + name);
})();

var byeSpeaker ={speak: function(name) {
    console.log(speakWord + " " + name);
  }}

  speak.byeSpeaker= byeSpeaker;

  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();
  
    
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }