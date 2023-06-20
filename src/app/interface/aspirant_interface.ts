export interface Aspirant {
  id: number;
  name: string;
  lastNameP: string;
  lastNameM: string;
  curp: string;
  bloodType: string;
  conditionS: string;
  sex: string;
  tipoAspirant:string;
  fatherTutor: FatherTutorInt[];
  address: AddressInt;
}

export interface FatherTutorInt {
  id: number;
  name: string;
  lastNameP: string;
  lastNameM: string;
  phone1: string;
  phone2: string;
  email: string;
}

export interface AddressInt {
  id: number;
  street: string;
  number: string;
  colony: string;
  municipality: string;
  postal_code: string;
}

export interface putAspirantDTO extends Omit<Aspirant, 'id'|'fatherTutor'|'address'>{
  fatherTutor: FatherTutorInt[];
  address: AddressInt;
}

export interface AspirantPost extends Omit<Aspirant, 'id'|'fatherTutor'|'address'>{
  fatherTutor: FatherTutorPost[];
  address: AddressPost;
}

export interface FatherTutorPost {
  name: string;
  lastNameP: string;
  lastNameM: string;
  phone1: string;
  phone2: string;
  email: string;
}

export interface AddressPost {
  street: string;
  number: string;
  colony: string;
  municipality: string;
  postal_code: string;
}
