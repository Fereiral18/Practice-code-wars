
const motors = [
    { model: "r8", cylinder: 2 },
    { model: "r5", cylinder: 4 },
    { model: "mustang", cylinder: 6 },
    { model: "fusion", cylinder: 8 },
  ];

  const cars = [
    { make: "audi", model: "r8", year: "2012", another: false },
    { make: "audi", model: "r5", year: "2013" },
    { make: "ford", model: "mustang", year: "2012" },
    { make: "ford", model: "fusion", year: "2015" },
    { make: "kia", model: "optima", year: "2012" },
  ];
    
    const marcasAgrupadas = cars.reduce((acc,{make, ...cars})=> { acc[make] ? acc[make] = [...acc[make], {...cars, cylinder : motors.find(item => item.model == cars.model)?.cylinder || 'Unknown' }] : acc[make] = [{...cars, cylinder : motors.find(item => item.model == cars.model)?.cylinder || 'Unknown' }]
      return acc
     },{});

   console.log(marcasAgrupadas);


//     {
//         audi: [
//       { model: 'r8', year: '2012', another: false, cylinder: 2 },
//       { model: 'r5', year: '2013', cylinder: 4 }
//     ],
//     ford: [
//       { model: 'mustang', year: '2012', cylinder: 6 },
//       { model: 'fusion', year: '2015', cylinder: 8 }
//     ],
//     kia: [ { model: 'optima', year: '2012', cylinder: 'Unknown' } ]
//   }




