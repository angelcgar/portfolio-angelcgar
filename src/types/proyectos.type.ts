export interface Project {
  id:            number;
  name:          string;
  title:         string;
  descriptions:  string;
  image:         string;
  category:      string;
  urlLive:       string;
  urlRepository: string;
  priority:      Priority;
  technologies:  string[];
  isImportant:   boolean;
  isVisible:     boolean;
  caseStudy:     CaseStudy;
}

export interface CaseStudy {
  problem:      string;
  solution:     string;
  technologies: string;
}

export enum Priority {
  Alta = "alta",
  Media = "media",
  Baja = "baja",
}