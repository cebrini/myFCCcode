function diffArray(arr1, arr2) {
  var newArr = [];
  function isMatch(arr1, arr2){
    var arrg = [];
    for (var i = 0; i < arr1.length; i++) {
       if(arr2.indexOf(arr1[i]) === -1)
           arrg = arrg.concat(arr1[i]);
       else
         continue;
    }
    
    return arrg;
  }
  
 
  newArr = isMatch(arr1,arr2).concat(isMatch(arr2,arr1));
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
