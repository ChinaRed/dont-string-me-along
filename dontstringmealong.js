var numSequence = "9899100101103104105";
var missingNums = [];

function missingNumPush (){
  for (var i = 0; i < 10; i++){
    if (str.indexOf(i) === -1){
      missingNums.push(i);
    }
  }
}

var str = 'tacocat';

function palindrome (){
  var strReverse = str.split('').reverse().join('');
  if( str === strReverse ){
    return "yes, a palindrome!";
  }else{
    return"nope!";
  }
}


