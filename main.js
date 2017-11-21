var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext("2d");
var imageObj = new Image();

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


document.querySelector('#bottom-text').addEventListener('keyup', function() {
  console.log(this.value);
  drawImage(this.value);
});

drawImage('');