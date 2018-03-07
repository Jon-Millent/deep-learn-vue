module.exports = {
  random: function(lowValue,highValue){
    var choice=highValue-lowValue+1;
    return Math.floor(Math.random()*choice+lowValue);
  }
}
