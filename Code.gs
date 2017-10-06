// Cuando se instala el documento se añaden las opciones del complemento al menu
function onInstall(e) {

    // Valores de las cadenas de texto
    var valores = [
    "PRUEBA LS"
  ];


    var ui = SpreadsheetApp.getUi();
    ui.createAddonMenu()
        .addItem(valores[0], 'getStarted')
        .addToUi();
}

// Cuando se abre el documento se añaden las opciones del complemento al menu
function onOpen(e) {

    // Valores de las cadenas de texto
    var valores = [
    "PRUEBA LS"
  ];

   

    var ui = SpreadsheetApp.getUi();
    ui.createAddonMenu()
        .addItem(valores[0], 'getStarted')
        .addToUi();
}
function getStarted(){

// Creamos el sidebar
    var html = HtmlService.createHtmlOutputFromFile('pruebas')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setTitle("Pruebas");

    // Lo mostramos
    SpreadsheetApp.getUi()
        .showSidebar(html);
}






//////////////////////////////////////////////////////////////
//Mostrar unidades organizativas
/////////////////////////////////////////////////////////////
function getUO() {
  var orgUnits= AdminDirectory.Orgunits.list("my_customer", {type:"all"}).organizationUnits
    
    orgUnits.sort(orderUO);
    //orgUnits.toString();
    var arr = Object.keys(orgUnits).map(function(k) { return orgUnits[k] });
    return arr;
   // for (var i=0; i<arr.length; i++){
    //Logger.log(arr[i].name+"-----ruta: "+arr[i].orgUnitPath+"-----padre: "+arr[i].parentOrgUnitPath+"\n");
    
   // }
}
function orderUO(a,b) {
  if (a.orgUnitPath.toLowerCase() < b.orgUnitPath.toLowerCase()){ return -1; }
  if (a.orgUnitPath.toLowerCase() > b.orgUnitPath.toLowerCase()){ return 1; }
  return 0;
}
///////////////////////////////////////////////////////////////


