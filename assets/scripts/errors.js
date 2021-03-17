// JavaScript Error Handling and Monitoring

// Throw and Custom Errors
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
}
function test() {
    throw new CustomError("Uh oh...");
}

try {
    test();
} catch(err) {
    alert(err.message);
    alert(err.name);
    alert(err.stack);
}

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

// Adding Buttons for Console Testing

function logMessage (hold) {
    hold.preventDefault();
    console.log("Console Log Demo");
}
logDemo.addEventListener("click", logMessage);

function consoleError (hold) {
    hold.preventDefault();
    console.error("Console Error Demo");
}
errorDemo.addEventListener("click", consoleError);

function printObj (hold) {
    hold.preventDefault();
    console.dir(document.head);
}
dir.addEventListener("click", printObj);

function printXML (hold) {
    hold.preventDefault();
    console.dirxml(document);
}
dirxml.addEventListener("click", printXML);

function errorObj (hold) {
    hold.preventDefault();
    console.error('Doh!');
}
error.addEventListener("click", errorObj);

const label = 'Log Group';
function startGroup (hold) {
    hold.preventDefault();
    console.group(label);
}
groupStart.addEventListener("click", startGroup);

function endGroup (hold) {
    hold.preventDefault();
    console.groupEnd(label);
}
groupEnd.addEventListener("click", endGroup);

function createTable (hold) {
    hold.preventDefault();
    console.table([
        {
          first: 'René',
          last: 'Magritte',
        },
        {
          first: 'Chaim',
          last: 'Soutine',
          birthday: '18930113',
        },
        {
          first: 'Henri',
          last: 'Matisse',
        }
      ]);
}
table.addEventListener("click", createTable);

function beginTime (hold) {
    hold.preventDefault();
    console.time();
}
startTimer.addEventListener("click", beginTime);

function endTime (hold) {
    hold.preventDefault();
    console.timeEnd();
}
endTimer.addEventListener("click", endTime);

function printStackTrace (hold) {
    hold.preventDefault();
    console.trace();
}
trace.addEventListener("click", printStackTrace);

function globalWarning (hold) {
    hold.preventDefault();
    console.warn('warn');
}
globalError.addEventListener("click", globalWarning);


// Trying Try/Catch
function checkVolumeInput () {
    if (volumeNumber.value > 100) {
        throw new Error("Volume Value must be less than or equal to 100");
    }
    return 1;
}

try {
    result = checkVolumeInput();
} catch (err) {
    result = 0;
} finally {
    throw new Error("Things happen o_O");
}
