/////////////////////////////////////////////////////////////////////////////////
//Mostrar unidades organizativas ordenadas devuelve el objeto con tosas las U.O
////////////////////////////////////////////////////////////////////////////////
function getUO() {
  var orgUnits = AdminDirectory.Orgunits.list("my_customer", {type:"all"}).organizationUnits
    
    orgUnits.sort(orderUO);
    var obj_orgUnits = Object.keys(orgUnits).map(function(k) { return orgUnits[k] });
    /*Logger.log( obj_orgUnits[0].orgUnitPath); Se recorre el objeto y se extraen los datos.
    {
  "kind": "admin#directory#orgUnit",
  "etag": etag,
  "name": string,
  "description": string,
  "orgUnitPath": string,
  "orgUnitId": string,
  "parentOrgUnitPath": string,
  "parentOrgUnitId": string,
  "blockInheritance": boolean
}*/
    return obj_orgUnits;
  
}
function orderUO(a,b) {
  if (a.orgUnitPath.toLowerCase() < b.orgUnitPath.toLowerCase()){ return -1; }
  if (a.orgUnitPath.toLowerCase() > b.orgUnitPath.toLowerCase()){ return 1; }
  return 0;
}
///////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////
//Mostrar unidades organizativas ordenadas
/////////////////////////////////////////////////////////////