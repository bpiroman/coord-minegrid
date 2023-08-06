var refSiteB1 = [412242.698,6323016.549];
var refSiteB3 = [414022.255,6324144.821];
var refSiteP1 = [412489.802,6321633.567];
var refSiteP2 = [413715.38,6320502.979];
var refSiteP3 = [410851.403,6320192.677];
var refSiteP5 = [410347.445,6321711.821];
var refSiteP6 = [411676.32,6324649.166];
var refSiteWS = [412423.187,6321788.478];

var refMgaB1 = [412382.233,6323161.202];
var refMgaB3 = [414161.135,6324289.171];
var refMgaP1 = [412629.286,6321778.688];
var refMgaP2 = [413854.532,6320648.57];
var refMgaP3 = [410991.581,6320338.2];
var refMgaP5 = [410487.691,6321856.821];
var refMgaP6 = [411815.964,6324793.245];
var refMgaWS = [412562.713,6321933.554];

var refSiteAveX = (refSiteB1[0]+refSiteB3[0]+refSiteP1[0]+refSiteP2[0]+refSiteP3[0]+refSiteP5[0]+refSiteP6[0]+refSiteWS[0])/8;
var refSiteAveY = (refSiteB1[1]+refSiteB3[1]+refSiteP1[1]+refSiteP2[1]+refSiteP3[1]+refSiteP5[1]+refSiteP6[1]+refSiteWS[1])/8;
var refMgaAveX = (refMgaB1[0]+refMgaB3[0]+refMgaP1[0]+refMgaP2[0]+refMgaP3[0]+refMgaP5[0]+refMgaP6[0]+refMgaWS[0])/8;
var refMgaAveY = (refMgaB1[1]+refMgaB3[1]+refMgaP1[1]+refMgaP2[1]+refMgaP3[1]+refMgaP5[1]+refMgaP6[1]+refMgaWS[1])/8;

var residualSiteXB1 = refSiteB1[0]-refSiteAveX;
var residualSiteXB3 = refSiteB3[0]-refSiteAveX;
var residualSiteXP1 = refSiteP1[0]-refSiteAveX;
var residualSiteXP2 = refSiteP2[0]-refSiteAveX;
var residualSiteXP3 = refSiteP3[0]-refSiteAveX;
var residualSiteXP5 = refSiteP5[0]-refSiteAveX;
var residualSiteXP6 = refSiteP6[0]-refSiteAveX;
var residualSiteXWS = refSiteWS[0]-refSiteAveX;

var residualSiteYB1 = refSiteB1[1]-refSiteAveY;
var residualSiteYB3 = refSiteB3[1]-refSiteAveY;
var residualSiteYP1 = refSiteP1[1]-refSiteAveY;
var residualSiteYP2 = refSiteP2[1]-refSiteAveY;
var residualSiteYP3 = refSiteP3[1]-refSiteAveY;
var residualSiteYP5 = refSiteP5[1]-refSiteAveY;
var residualSiteYP6 = refSiteP6[1]-refSiteAveY;
var residualSiteYWS = refSiteWS[1]-refSiteAveY;

var residualMgaXB1 = refMgaB1[0]-refMgaAveX;
var residualMgaXB3 = refMgaB3[0]-refMgaAveX;
var residualMgaXP1 = refMgaP1[0]-refMgaAveX;
var residualMgaXP2 = refMgaP2[0]-refMgaAveX;
var residualMgaXP3 = refMgaP3[0]-refMgaAveX;
var residualMgaXP5 = refMgaP5[0]-refMgaAveX;
var residualMgaXP6 = refMgaP6[0]-refMgaAveX;
var residualMgaXWS = refMgaWS[0]-refMgaAveX;

var residualMgaYB1 = refMgaB1[1]-refMgaAveY;
var residualMgaYB3 = refMgaB3[1]-refMgaAveY;
var residualMgaYP1 = refMgaP1[1]-refMgaAveY;
var residualMgaYP2 = refMgaP2[1]-refMgaAveY;
var residualMgaYP3 = refMgaP3[1]-refMgaAveY;
var residualMgaYP5 = refMgaP5[1]-refMgaAveY;
var residualMgaYP6 = refMgaP6[1]-refMgaAveY;
var residualMgaYWS = refMgaWS[1]-refMgaAveY;

console.log(residualSiteXB1);
console.log(residualSiteXB3);
console.log(residualSiteXP1);
console.log(residualSiteXP2);
console.log(residualSiteXP3);
console.log(residualSiteXP5);
console.log(residualSiteXP6);
console.log(residualSiteXWS);

function calc() {
    var inputx = document.getElementById('coordx').valueAsNumber;
    var inputy = document.getElementById('coordy').valueAsNumber;
    var result = inputx*2 + inputy;
    var el = document.getElementById('result');
    el.textContent = "Result: " + result;
}