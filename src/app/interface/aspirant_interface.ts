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

// export interface Aspirant {
//   id: number;
//   name: string;
//   lastNameP: string;
//   lastNameM: string;
//   curp: string;
//   bloodType: string;
//   conditionS: string;
//   sex: string;
//   fatherTutor: {
//     id: number;
//     name: string;
//     lastNameP: string;
//     lastNameM: string;
//     phone1: string;
//     phone2: string;
//     email: string;
//   }[];
//   address: {
//     id: number;
//     street: string;
//     number: string;
//     colony: string;
//     municipality: string;
//     postal_code: string;
//   };
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
//   fatherTutor: FatherTutor[];
//   address: Address;
// }
// export interface FatherTutor {
//   id: number;
//   name: string;
//   lastNameP: string;
//   lastNameM: string;
//   phone1: string;
//   phone2: string;
//   email: string;
// }

// export interface Address {
//   id: number;
//   street: string;
//   number: string;
//   colony: string;
//   municipality: string;
//   postal_code: string;
// }


