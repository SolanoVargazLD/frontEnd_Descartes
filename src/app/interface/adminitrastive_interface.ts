export interface Administrative {
  id: number;
  name: string;
  lastNameP: string;
  lastNameM: string;
  email: string;
  phone: string;
  password: string;
}

export interface AdministrativeAdd extends Omit<Administrative, 'id'>{
  roles: Role;
	school: School;
}
export interface Role {
	id: number;
}

export interface School {
	id: number;
}
