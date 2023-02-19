// Sistema de votación por puntos: supongamos que queremos implementar un sistema de votación por puntos para una competencia de talentos. Tenemos un array de objetos que representan a los participantes, donde cada objeto tiene las siguientes propiedades: name (nombre del participante), talent (talento que posee) y votes (array de votos que recibió, cada uno en un objeto que contiene el nombre de quien votó y la cantidad de puntos otorgados). Queremos implementar una función que calcule el puntaje total de cada participante sumando los puntos otorgados por todos los votantes.

const participants = [
    {
      name: "Juan",
      talent: "canto",
      votes: [
        { voter: "María", points: 8 },
        { voter: "Pedro", points: 9 },
        { voter: "Ana", points: 7 },
      ],
    },
    {
      name: "María",
      talent: "baile",
      votes: [
        { voter: "Juan", points: 7 },
        { voter: "Pedro", points: 8 },
        { voter: "Ana", points: 9 },
      ],
    },
    {
      name: "Pedro",
      talent: "malabares",
      votes: [
        { voter: "Juan", points: 9 },
        { voter: "María", points: 8 },
        { voter: "Ana", points: 7 },
      ],
    },
    {
      name: "Ana",
      talent: "magia",
      votes: [
        { voter: "Juan", points: 7 },
        { voter: "María", points: 8 },
        { voter: "Pedro", points: 9 },
      ],
    },
  ];
  
  const calculateTotalPoints = (arr) =>
    arr.map(({ name, votes }) => ({
      name: name,
      totalPoints: votes.reduce((prev, current) => prev + current.points, 0),
    }));
    
  console.log(calculateTotalPoints(participants));
  // Ejemplo de Entrada: calculateTotalPoints(participants);
  // Ejempĺo de salida : [
  //   { name: 'Juan', totalPoints: 24 },
  //   { name: 'María', totalPoints: 24 },
  //   { name: 'Pedro', totalPoints: 24 },
  //   { name: 'Ana', totalPoints: 24 }
  // ]