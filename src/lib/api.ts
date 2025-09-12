import proyectos from '../data/proyectos.json';

export async function getProjectData() {
	// const response = await fetch('https://api.example.com/data');
	// if (!response.ok) {
	//   throw new Error('Network response was not ok');
	// }

	const data = proyectos
		.filter((proyecto) => proyecto.isVisible === true)
		.map((proyecto) => {
			return {
				id: proyecto.id,
				name: proyecto.name,
				title: proyecto.title,
				description: proyecto.descriptions,
				image: proyecto.image,
				url: proyecto.urlLive,
				repository: proyecto.urlRepository,
				technologies: proyecto.technologies,
				category: proyecto.category,
				isImportant: proyecto.isImportant,
			};
		});

	// const data = proyectos;
	return data;
}
