export interface Aspirant {
	id: number;
}

export interface LevelBasic {
	id: number;
}

export interface AspirantBasic{
	aspirant: Aspirant;
	levelBasic: LevelBasic;
}
