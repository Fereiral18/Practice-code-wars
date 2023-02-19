// Supongamos que tenemos un array de objetos que representan estudiantes universitarios. Cada objeto tiene las siguientes propiedades: name (nombre del estudiante), age (edad del estudiante), major (carrera que estudia el estudiante) y grades (array de calificaciones del estudiante en diferentes materias). Queremos implementar una función que calcule el promedio de calificaciones de todos los estudiantes en una carrera determinada y que devuelva un objeto que contenga el promedio y la cantidad de estudiantes de la carrera.

const students = [
    { name: 'Juan', age: 21, major: 'ingeniería', grades: [8, 7, 9, 8, 10] },
    { name: 'María', age: 20, major: 'medicina', grades: [9, 9, 9, 8, 10] },
    { name: 'Pedro', age: 22, major: 'ingeniería', grades: [6, 7, 7, 8, 6] },
    { name: 'Ana', age: 19, major: 'arquitectura', grades: [7, 8, 6, 7, 9] },
    { name: 'Carlos', age: 20, major: 'medicina', grades: [8, 7, 9, 9, 10] }
  ];

  const calification = (arr, career) =>{

    let major = arr.filter(({major})=> major === career )
    let array = []

    let averages = major.reduce((prev, {grades})=>{
     array = [...array, grades].flat()

     return {
        average : array.reduce((prev, currentValue)=> prev + currentValue, 0) / array.length,
        numberOfStudents: major.length
       }
    },{})
  return averages
  }
  console.log(calification(students, 'ingeniería'));

//   Ejemplo de Entrada: calculateAverageByMajor(students, 'ingeniería')
//   Ejempĺo de salida : { average: 7.6, numberOfStudents: 2 }
