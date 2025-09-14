export type ProjectData = {
	id: number;
	name: string;
	title: string;
	description: string;
	image: string;
	url: string;
	repository: string;
	technologies: string[];
	category: string;
	isImportant: boolean;
	caseStudy: CaseStudy;
};

type CaseStudy = {
	problem: string;
	solution: string;
	technologies: string;
};
