export interface IProjectModel {
  licenses: string;
  name: string;
  repository_url: string;
  stars: number;
}

export interface IProjectProps {
  query: string;
}