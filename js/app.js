
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

$('#submitGridMga').on('click', Site2Mga);

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

$('#submitMgaGrid').on('click', mga2Site);