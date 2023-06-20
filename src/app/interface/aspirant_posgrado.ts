export interface AspirantPostgrado{
  id_asp: number;
  id_asp_posgrado: number;
  name: string;
  lasNameP: string;
  lasNameM: string;
  cedula: string;
  tip_asp: string;
}

export interface Aspirant {
	id: number;
}

export interface LevelHigher {
	id: number;
}

export interface AspirantePosgradoADD {
	professionalLicense: string;
	email: string;
	phone: string;
	aspirant: Aspirant;
	levelHigher: LevelHigher;
}
