function collatz_num(num) {
    if(num % 2 == 0) {
        return num / 2;
      }
      else {
        return (num * 3) + 1;
      }
    }
    
    function collatz_sira(num) {
      var deger = 1;
      while(num != 1) {
        num = collatz_num(num);
        deger++;
      }
      return deger;
    }
    
    function enuzun_deger(num) {
      var max = 0;
      var max_index;
        
      for(var i=1; i<num; i++) {
        var sira = collatz_sira(i);
        if(sira > max) {
          max = sira;
          max_deger = i;
        }
      }
      return max_deger;
    }
    
    console.log(enuzun_deger(1000000));
    
    
    