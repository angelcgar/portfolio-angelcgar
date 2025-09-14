import { prioridadOrden } from '../constants';
import type { Project } from '../types/proyectos.type';
import proyectos from '../data/proyectos.json';
import type { ProjectData } from '@/types/proyectosData.type';

const proyectosData = proyectos as Project[];

/**
 * Obtiene los proyectos visibles
 */
export async function getProjectData(): Promise<ProjectData[]> {
	const data = proyectosData
		.filter((proyecto) => proyecto.isVisible === true)
		.sort((a, b) => prioridadOrden[a.priority] - prioridadOrden[b.priority])
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
				caseStudy: proyecto.caseStudy,
			};
		});

	return data;
}
