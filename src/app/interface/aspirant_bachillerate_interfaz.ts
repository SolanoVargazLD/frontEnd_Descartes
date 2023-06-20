export interface Aspirant {
	id: number;
}

export interface LevelUpperMiddle {
	id: number;
}

export interface AspirantBachillerateSave {
	schoolOrigin: string;
	phone: string;
	email: string;
	aspirant: Aspirant;
	levelUpperMiddle: LevelUpperMiddle;
}
