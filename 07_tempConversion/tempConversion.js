const convertToCelsius = function(temp) {

  if(typeof(temp)!="number")
  {
    return "ERROR"
  }

  let cel = (temp-32)*5/9;
  return round(cel,1);


};

const convertToFahrenheit = function(temp) {
  if(typeof(temp)!="number")
  {
    return "ERROR"
  }
  let far = temp * 9/5 + 32;
  return round(far,1);

};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
