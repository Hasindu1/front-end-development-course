

(function(window){
  var speakWord = "Hello";
  var helloSpeaker ={};
 
 helloSpeaker.hello =function (name) {
    console.log(speakWord + " " + name);
    
  }

  window.helloSpeaker =helloSpeaker;
})(window);



