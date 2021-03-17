// MakeUp Lab JavaScript Error Handling and Monitoring

// Error Buttons
var logDemo = document.getElementById("log-demo");
var errorDemo = document.getElementById("error-demo");
var dir = document.getElementById("dir");
var dirxml = document.getElementById("dirxml");
var error = document.getElementById("error");
var groupStart = document.getElementById("group-start");
var groupEnd = document.getElementById("group-end");
var table = document.getElementById("table");
var startTimer = document.getElementById("start-timer");
var endTimer = document.getElementById("end-timer");
var trace = document.getElementById("trace");
var globalError = document.getElementById("global-error");

logDemo.onclick = function(hold) {
    hold.preventDefault();
    console.log('Console Log Demo');
}

errorDemo.onclick = function(hold) {
    hold.preventDefault();
    console.error('Console Error Demo');
}
