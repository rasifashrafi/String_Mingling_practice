function stringMingling(str1, str2) {
    if (str1.length !== str2.length) {
        return ;
    }
    if (str1.length === 0) {
      return "";
    }
    return str1.charAt(0) + str2.charAt(0) + stringMingling(str1.substring(1),str2.substring(1));
   }
   console.log(stringMingling("water","juice"))