console.log("started");

function openNew() {
  //var newURL = "http://stackoverflow.com/";
  chrome.tabs.create({ url: "/options.html" });
};
openNew();
/*
var stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', function() {
  openNew();
});
*/

/*
var newURL = "http://stackoverflow.com/";
chrome.tabs.create({ url: newURL });

chrome.tabs.getCurrent(function(activeTab) {
  var constraints = {
    audio: true,
    video: false,
  };

  chrome.tabCapture.capture(constraints, function(stream) {
    console.log("\ngot stream");
    console.log(stream);
  });
});
*/

/*
document.addEventListener('DOMContentLoaded', function() {
  //bg.console.log("DOM content loaded");
  console.log("DOM content loaded");

  navigator.getUserMedia_ = (   navigator.getUserMedia
                           || navigator.webkitGetUserMedia 
                           || navigator.mozGetUserMedia 
                           || navigator.msGetUserMedia);

  if ( !! navigator.getUserMedia_) {

    navigator.getUserMedia({audio: true, video: false}, function(pStream) {
          stream = pStream;
          //bg.console.log("Enter getUserMedia.");
          console.log("Enter getUserMedia.");
          
          // init recorders
          audio_recorder = RecordRTC(stream, { type: "audio", bufferSize: 16384 });

          console.log("Successful initialization.");

          var startButton = document.getElementById('startButton');
          startButton.addEventListener('click', function() {
            console.log('Clicked Start Button');

            
            //var recordRTC = RecordRTC(mediaStream); 
            //recordRTC.startRecording(function() {
            audio_recorder.startRecording(function() {
              console.log('recording started');
            }); 
            console.log("didn't crash");
          });

          var stopButton = document.getElementById('stopButton');
          stopButton.addEventListener('click', function() {
            console.log('Clicked Stop Button');

            //recordRTC.stopRecording(function(audioURL) { 
            audio_recorder.stopRecording(function(audioURL) {
                  console.log('stopped recording');
                  mediaElement.src = audioURL;
                  console.log(audioURL); 
              });
          });
        },
        function(err){
          //if user refuse to share their camera/speaker
          if(err.name == "PermissionDeniedError"){
            $("#permission_error").text("Looks like you refuse to share your camera & speaker :( ")
          }


    });
  }
});*/