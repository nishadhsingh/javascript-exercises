const removeFromArray = function(argnumArr, ...argfilters) {
    
    
let numArr = Array.from(argnumArr);

for(let i = 0;i<argfilters.length;i++){
    for(arg of numArr)
    {
        for(filters of argfilters)
        {
            if(arg===filters)
            {
                index = numArr.indexOf(arg);
                if(index>-1)
                {
                    numArr.splice(index,1);
                }
            }
        }
    }
}
return numArr;

};





// Do not edit below this line
module.exports = removeFromArray;
