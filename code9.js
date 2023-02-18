const hamming = (a,b) =>{
    let arr = [...a]
    let arr2 = [...b]
    let result = []

    arr.forEach((item, index)=>{
        if(item != arr2[index]){
           result.push(item) 
        }
         
    })

    return result.length
}

console.log(hamming("I like turtles","I like turkeys"));
