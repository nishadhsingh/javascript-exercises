const leapYears = function(year) {

    if(isDivisible(year,4))
    {
        if(isDivisible(year,100))
        {
            if(isDivisible(year,400))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return true;
        }
    }
    else
    {
        false;
    }

};

const isDivisible = function(num,divisor)
{
    if(num%divisor===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
