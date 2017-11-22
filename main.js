var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext("2d");
var imageObj = new Image();
var maxWidth = 500;

function downloadImage(img) {
  var a = document.createElement('a');
  a.href = savedImg;
  a.download = "output.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function drawImage(text) {
  imageObj.onload = function() {
    imgWidth = imageObj.width;
    imgHeight = imageObj.height;
    if (imgWidth > maxWidth) {
      shrinkRatio = maxWidth / imgWidth;
    }
    canvas.width = imgWidth * shrinkRatio;
    canvas.height = imgHeight * shrinkRatio;
    
    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
    ctx.font = "80pt sans-serif";
    ctx.lineWidth = 3;
    ctx.fillStyle = 'white';
    ctx.fillText(text, 100, 100);
    ctx.strokeStyle = 'black';
    ctx.strokeText(text, 100, 100);
  };
  imageObj.src = "test.jpg";
}


document.querySelector('#bottom-text').addEventListener('input', function() {
  drawImage(this.value);
});

drawImage('');

var imageLoader = document.getElementById('image-file');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
var reader = new FileReader();
reader.onload = function (event) {
    var img = event.target.result;
}
reader.readAsDataURL(e.target.files[0]);

}

var dropbox = document.querySelector('#drop-box');
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("dragleave", dragleave, false);
dropbox.addEventListener("drop", drop, false);
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log('enter');
}

function dragleave(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log('leave');
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log('over');
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  //you can check e's properties
  console.log(e);
  var dt = e.dataTransfer;
  var files = dt.files;
  
  //this code line fires your 'handleImage' function (imageLoader change event)
  imageLoader.files = files;
}