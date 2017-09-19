function RemoveShorterStrings(strarr,val) {
  var newarr = [];
  for(var x=0;x<strarr.length;x++){
    if (strarr[x].length > val){
      newarr.push(strarr[x]);
    }
  }
  console.log(newarr)
}
var strarr = ["Nike","Jordan","New Balance", "Saucony", "Puma", "FUBU", "BUFU", "Fila", "Phatfarm"]
RemoveShorterStrings(strarr,4);