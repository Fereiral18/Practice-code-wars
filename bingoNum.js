const getBingoCard = () => {
    let arr = [
        [], 
        [], 
        [], 
        [], 
        []  
    ];
    
    for(let i = 0; i < arr.length; i++) {
        let min = (i * 18) + 1;
        let max = min + 18;
       
        while(arr[i].length < 5) {
            
            let num = Math.floor(Math.random() * (max - min)) + min;
            
            if(!arr[i].includes(num)) {
                arr[i].push(num);
            }
        }
        arr[i].sort((a,b) => a - b);
    }
    return arr
}
console.time();
console.log('resultado', getBingoCard());
 

