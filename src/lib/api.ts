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
		.sort((a, b) => {
			// 1️⃣ Primero: prioridad (baja → media → alta)
			const diffPrioridad = prioridadOrden[a.priority] - prioridadOrden[b.priority];
			if (diffPrioridad !== 0) return diffPrioridad;

			// 2️⃣ Segundo: importancia manual
			if (a.isImportant && !b.isImportant) return -1;
			if (!a.isImportant && b.isImportant) return 1;

			// 3️⃣ Tercero: fecha (más reciente primero)
			return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
		})
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
