
export interface AspirantBachillerate {
  id: number;
  schoolOrigin: string;
  phone: string;
  email: string;
  aspirant: AspirantBachiller;
  levelUpperMiddle: LevelUpperMiddle;
}


export interface LevelUpperMiddle {
  id: number;
  name: string;
  level: string;
  img: string;
}

export interface AspirantBachiller {
  id: number;
  name: string;
  lastNameP: string;
  lastNameM: string;
  curp: string;
  bloodType: string;
  conditionS: string;
  sex: string;
  tipoAspirant: string;
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

export interface AspirantBachillerateDAO extends Omit<AspirantBachillerate, 'id'| 'aspirant'| 'levelUpperMiddle'>{
}

// export interface putAspirantDTO extends Omit<Aspirant, 'id'|'fatherTutor'|'address'>{
//   fatherTutor: FatherTutorInt[];
//   address: AddressInt;
// }

// export interface Aspirant {
//   id: number;
//   name: string;
//   lastNameP: string;
//   lastNameM: string;
//   curp: string;
//   bloodType: string;
//   conditionS: string;
//   sex: string;
//   tipoAspirant:string;
//   fatherTutor: FatherTutor[];
//   address: Address;
// }

// export interface Address extends AddressInt{
//   id: number;
// }

// export interface FatherTutor extends FatherTutorInt{
//   id: number;
// }


// export interface FatherTutorInt {
//   id: number;
//   name: string;
//   lastNameP: string;
//   lastNameM: string;
//   phone1: string;
//   phone2: string;
//   email: string;
// }

// export interface AddressInt {
//   id: number;
//   street: string;
//   number: string;
//   colony: string;
//   municipality: string;
//   postal_code: string;
// }

// export interface putAspirantDTO extends Omit<Aspirant, 'id'|'fatherTutor'|'address'>{
//   fatherTutor: FatherTutorInt[];
//   address: AddressInt;
// }

