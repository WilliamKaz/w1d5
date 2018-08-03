var container = [];
var sortedBin = [];

var ascending = function(){
  container.sort(function(a,b){
    return a - b;
  });
}

module.exports ={
  function1: function(number){
    container.push(number);
    console.log(container);
  },
  functionSort: function(array){
    ascending();
    console.log(container);
  }
}


