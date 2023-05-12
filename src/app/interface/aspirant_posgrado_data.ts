
export interface AspirantPosgradoData {
  id: number;
  professionalLicense: string;
  phone: string;
  email: string;
  aspirant: AspirantPos;
  levelHigher: LevelHigher;
}

export interface LevelHigher {
  id: number;
  name_career: string;
  keyCareer: string;
  nivel_educative: string;
  img: string;
  pdf: string;
}

export interface AspirantPos {
  id: number;
  name: string;
  lastNameP: string;
  lastNameM: string;
  curp: string;
  bloodType: string;
  conditionS: string;
  sex: string;
  tipoAspirant: string;
  fatherTutor: FatherTutor[];
  address: Address;
}

export interface FatherTutor {
  id: number;
  name: string;
  lastNameP: string;
  lastNameM: string;
  phone1: string;
  phone2: string;
  email: string;
}

export interface Address {
  id: number;
  street: string;
  number: string;
  colony: string;
  municipality: string;
  postal_code: string;
}

export interface AspirantPosgradoDataDAO extends Omit<AspirantPosgradoData, 'id'| 'aspirant'| 'levelHigher'>{
}
