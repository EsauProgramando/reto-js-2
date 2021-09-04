//1. La siguiente función permite extraer el número mayor de un arreglo //
  function obtNumber (array = []) {   
    let numMayor = 0   
    array.forEach((item) => {     
      if (item > numMayor) {       
        item = item + 1
        numMayor = item    
       }   })   
       return numMayor 
  }  
module.exports = obtNumber;

// corregido el programa
  function obtNumber (array = [ 8 , 80, 40]) {   
    let numMayor = 0   
    array.forEach((item) => {     
      if (item > numMayor) {       
        item = item + 1
        numMayor = item    
       }   })   
       return numMayor 
  }   
console.log(obtNumber()-1);