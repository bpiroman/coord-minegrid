var refMgaX = 603.345302162739;
var refMgaY = 2275.639508549100;
var a1 = 0.999659643145;
var b1 = 0.000051162911;

// var Sx = 412396.182;
// var Sy = 6323603.650;
// coordMgaX = refMgaX+a1*Sx-b1*Sy;
// coordMgaY = refMgaY+Sx*b1+Sy*a1;
// console.log(coordMgaX.toFixed(3)+", "+coordMgaY.toFixed(3));

function Site2Mga() {
    var Sx = document.getElementById('coordx').valueAsNumber;
    var Sy = document.getElementById('coordy').valueAsNumber;
    coordMgaX = refMgaX+a1*Sx-b1*Sy;
    coordMgaY = refMgaY+Sx*b1+Sy*a1;
    var el = document.getElementById('result');
    el.textContent = coordMgaX.toFixed(3) + ", " + coordMgaY.toFixed(3);
}

// function calc() {
//     var inputx = document.getElementById('coordx').valueAsNumber;
//     var inputy = document.getElementById('coordy').valueAsNumber;
//     var result = inputx*2 + inputy;
//     var el = document.getElementById('result');
//     el.textContent = "Result: " + result;
// }