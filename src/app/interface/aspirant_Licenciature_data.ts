
export interface AspirantLicenciatureData {
  id: number;
  schoolOrigin: string;
  phone: string;
  email: string;
  aspirant: AspirantLic;
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

export interface AspirantLic {
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

export interface AspirantLicenciatureDataDAO extends Omit<AspirantLicenciatureData, 'id'| 'aspirant'| 'levelHigher'>{
}
