const sumAll = function(start,end) {

    if(typeof(start) != "number"||typeof(end)!= "number")
    {
        return 'ERROR'
    }
    if(start<0||end<0)
    {
        return 'ERROR';
    }
    if(start>end)
    {
        let temp = start;
        start = end;
        end = temp;
    }

    let total = 0;
    for(let i =start;i<=end;i++)
    {
        total = total+i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
