const people = [
    { name: 'John', age: 23 },
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 32 }
  ];

  const peoples = (arr) => arr.reduce((prev, {name, age})=>({...prev,[name] : age }),{})

  console.log(peoples(people));
  
  // Output: { John: 23, Alice: 28, Bob: 32 }
