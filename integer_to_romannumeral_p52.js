function intRoman(val){
  var temp = "";
    while (val > 1000){
      val = val-1000;
      temp += "M";
    }
    while (val == 999){
      val = val - 999;
      temp += "IM";
    }
    while (val > 500){
      val = val - 500;
      temp += "D";
    }
    while (val == 490){
      val = val - 490;
      temp += "XD";
    }
    while (val > 100){
      val = val - 100;
      temp += "C";
    }
    while (val == 99){
      val = val - 99;
      temp += "IC"
    }
    while (val > 50){
      val = val - 50;
      temp += "L";
    }
    while (val == 49){
      val = val - 49;
      temp += "IL"
    }
    while (val > 10){
      val = val - 10;
      temp += "X"
    }
    while (val == 9){
      val = val - 9;
      temp += "IX"
    }
    while (val > 5){
      val = val - 5;
      temp += "V";
    }
    while (val == 4){
      val = val - 4;
      temp += "IV"
    }
    while (val > 1){
      val = val - 1;
      temp += "I"
    }
  }

intRoman(469)