export interface LevelHigherAdd extends Omit<LevelHigher, 'id'>{
	school: School;
}

export interface LevelHigher {
	id: number;
	nameCareer: string;
	keyCareer: string;
	nivelEducativo: string;
	img: string;
	pdf: string;
}

export interface School {
	id: number;
}
