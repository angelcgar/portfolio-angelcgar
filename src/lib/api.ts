import proyectos from '../data/proyectos.json'

export async function fetchData() {
  // const response = await fetch('https://api.example.com/data');
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }
  const data = proyectos;
  return data;
}
