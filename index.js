"use string";

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
    getInformAbout() {
       return `${this.name} ${this.surname}`;
     }
  };
  const PeopleB = new User('andy','ferguson');
console.log(PeopleB.getInformAbout());
// class Stydent extends User {
//   InformAbout() {
//     super.InformAbout;
    
//   }
//   constructor(year) {
//     this.start = year;
//     this._data = 2022;
//   }
//   get Course() {
//     return this._data - this.start;
//   }
//   set Course(newYear) {
//     this.start = newYear;
//     if (this.Course) {
//       this.Course > 5;
//       throw TypeError;
//     }
//   }
// };

// const nameGroup=[
//   { name: 'Андрей' ,surname: "Иванов"},
//   {name: "Кристина",surname:"Голкина"},
// ]
// class Group {
//   constructor(Stydent, nameGroup) {
//     this.nameGroups = nameGroup;
//     this.Stydent = Stydent;
//   };
//   showStudents() {
//     Function (...nameGroup)
//     return `$this.name $this.surname`
    
//   }

  
// }
