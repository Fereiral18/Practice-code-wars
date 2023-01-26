 //Recursividad
 
 function sum(nums) {
        if (nums < 1) {
            return -1;
        } else {
            const [first, ...rest] = nums;
        return first + rest
    } 
}
    
   console.log(sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  