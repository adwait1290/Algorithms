function braceValid(str){
  var closedBraces = {
    "}":"{",
    ")":"(",
    "]":"["
  };
  var openBraces = {
    "{":"}",
    "(":")",
    "[":"]"
  };
  var braceTracker = [];
  
  for(var i=0;i<str.length;i++){
    if(typeof(closedBraces[str[i]])!="undefined") //First type of comparison using typeof
      //Note how it's only one = because it's not strict
    {
      console.log(str[i]);
      console.log('closed');
      console.log(braceTracker);

    if(closedBraces[str[i]]!== braceTracker.pop())
    
    {
      return false;
    }
    }
    else if (openBraces[str[i]]!== undefined)
    //Second type of comparison without typeof
    //note how it has to be two == 
    {
      console.log(str[i]);
      console.log('open');
    braceTracker.push(str[i]);  
    }
  }
  if (braceTracker.length !== 0 ){
    return false;
  }
  return true;
}

str = "[{}]";
braceValid(str);