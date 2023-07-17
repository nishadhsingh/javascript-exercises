const repeatString = function(input,times) {
    if(times<0)
    {
        return "ERROR";
    }
    let output = "";
    for(let i=0;i<times;i++)
    {
       output = output+input;
    }
    return output;

};

// Do not edit below this line
module.exports = repeatString;
