
function Site2Mga() {
    $('#resultMga').empty();

    const refMgaX = 603.345302162739;
    const refMgaY = 2275.639508549100;
    const a1 = 0.999659643145;
    const b1 = 0.000051162911;

    const eastingGrid = $('#coordxGrid').val();
    const northingGrid = $('#coordyGrid').val();

    const coordMgaX = refMgaX + a1 * eastingGrid - b1 * northingGrid;
    const coordMgaY = refMgaY + eastingGrid * b1 + northingGrid * a1;
    const result = coordMgaX.toFixed(3) + ", " + coordMgaY.toFixed(3);

    $('#resultMga').append(result);
}

function mga2Site() {
    $('#resultGrid').empty();

    const refSiteX = -603.667188161735;
    const refSiteY = -2276.382751966880;
    const a1 = 1.000340470014;
    const b1 = -0.000051197756;

    const eastingMga = $('#coordxMga').val();
    const northingMga = $('#coordyMga').val();

    const coordGridX = refSiteX + a1 * eastingMga - b1 * northingMga;
    const coordGridY = refSiteY + eastingMga * b1 + northingMga * a1;
    const result = coordGridX.toFixed(3) + ", " + coordGridY.toFixed(3);

    $('#resultGrid').append(result);
}

function Site2LatLong(sitex, sitey) {
    const en_radians_long = (long * Math.PI)/180;
    const en_radians_lat = (lat * Math.PI)/180;
    
    const calc_zone = parseInt((long/6)+31, 10);
    const calc_meridian = (6*calc_zone)-183;
    
    const delta_lambda = Math.abs(en_radians_long)-((calc_meridian * Math.PI)/180);
    
    const calc_A = Math.cos(en_radians_lat)*Math.sin(delta_lambda);
    
    const calc_Xi = 0.5 * Math.log((1+calc_A)/(1-calc_A));
    const calc_Eta = Math.atan(Math.tan(en_radians_lat)/Math.cos(delta_lambda))-en_radians_lat;
    
    const e2 = 0.006739497;
    const c = 6399593.626;
    const calc_Ni = (c/Math.sqrt(1+e2 * Math.pow(Math.cos(en_radians_lat), 2))) * 0.9996;
    const calc_Zeta = (e2/2) * Math.pow(calc_Xi, 2) * Math.pow(Math.cos(en_radians_lat), 2);
    
    const calc_A1 = Math.sin(2 * en_radians_lat);
    const calc_A2 = (Math.abs(calc_A1) * Math.pow(Math.cos(en_radians_lat), 2));
    const calc_J2 = en_radians_lat + (calc_A1 / 2); //ok
    const calc_J4 = ((3 * calc_J2) + -(calc_A2)) / 4; //ok
    const calc_J6 = (5 * calc_J4 + -(calc_A2) * Math.pow(Math.cos(en_radians_lat), 2)) / 3;
    
    const calc_Alfa = 0.75 * e2; //ok
    const calc_Beta = (5/3) * Math.pow(calc_Alfa, 2); // ok
    const calc_Gamma = (35/27) * Math.pow(calc_Alfa, 3); //ok
    const calc_Bfi = 0.9996 * c * (en_radians_lat - (calc_Alfa*calc_J2)+(calc_Beta*calc_J4)-(calc_Gamma*calc_J6));
    
    const easting = calc_Xi * calc_Ni * (1 + calc_Zeta/3) + 500000;
    const northing = calc_Eta * calc_Ni * (1 + calc_Zeta) + calc_Bfi + 10000000;
    let value;
    value = `<h3>Mine Grid</h3><h3>${easting.toFixed(3)}, ${northing.toFixed(3)}</h3>`;
    $('#resultLatLongGrid').append(result);
}


function LatLong2Site(lat, long) {
    const en_radians_long = (long * Math.PI)/180;
    const en_radians_lat = (lat * Math.PI)/180;
    
    const calc_zone = parseInt((long/6)+31, 10);
    const calc_meridian = (6*calc_zone)-183;
    
    const delta_lambda = Math.abs(en_radians_long)-((calc_meridian * Math.PI)/180);
    
    const calc_A = Math.cos(en_radians_lat)*Math.sin(delta_lambda);
    
    const calc_Xi = 0.5 * Math.log((1+calc_A)/(1-calc_A));
    const calc_Eta = Math.atan(Math.tan(en_radians_lat)/Math.cos(delta_lambda))-en_radians_lat;
    
    const e2 = 0.006739497;
    const c = 6399593.626;
    const calc_Ni = (c/Math.sqrt(1+e2 * Math.pow(Math.cos(en_radians_lat), 2))) * 0.9996;
    const calc_Zeta = (e2/2) * Math.pow(calc_Xi, 2) * Math.pow(Math.cos(en_radians_lat), 2);
    
    const calc_A1 = Math.sin(2 * en_radians_lat);
    const calc_A2 = (Math.abs(calc_A1) * Math.pow(Math.cos(en_radians_lat), 2));
    const calc_J2 = en_radians_lat + (calc_A1 / 2); //ok
    const calc_J4 = ((3 * calc_J2) + -(calc_A2)) / 4; //ok
    const calc_J6 = (5 * calc_J4 + -(calc_A2) * Math.pow(Math.cos(en_radians_lat), 2)) / 3;
    
    const calc_Alfa = 0.75 * e2; //ok
    const calc_Beta = (5/3) * Math.pow(calc_Alfa, 2); // ok
    const calc_Gamma = (35/27) * Math.pow(calc_Alfa, 3); //ok
    const calc_Bfi = 0.9996 * c * (en_radians_lat - (calc_Alfa*calc_J2)+(calc_Beta*calc_J4)-(calc_Gamma*calc_J6));
    
    const easting = calc_Xi * calc_Ni * (1 + calc_Zeta/3) + 500000;
    const northing = calc_Eta * calc_Ni * (1 + calc_Zeta) + calc_Bfi + 10000000;
    let value;
    value = `<h3>Mine Grid</h3><h3>${easting.toFixed(3)}, ${northing.toFixed(3)}</h3>`;
    $('#resultLatLongGrid').append(result);
}


$('#submitGridMga').on('click', Site2Mga);
$('#submitMgaGrid').on('click', mga2Site);
$('#submitMgaLatLong').on('click', Site2LatLong);
$('#submitLatLongMga').on('click', LatLong2Site);