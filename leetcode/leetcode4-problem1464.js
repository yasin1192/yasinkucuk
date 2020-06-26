var maxProduct = function(nums) {
    let firstMax = nums[0]-1;
    let secondMax = nums[1]-1;
    let firstMaxIndex = 0;
    let secondMaxIndex = 1;
    
    for (var i=2; i<nums.length; i++){
        if(nums[i] > firstMax) {
            firstMax = nums[i] - 1;
            firstMaxIndex = i;
        }
    }
    
    for(var j=2; j<nums.length; j++){
        if(nums[j] > secondMax && j !== firstMaxIndex){
            secondMax = nums[j]-1;
        }
    }
    return firstMax * secondMax;
};