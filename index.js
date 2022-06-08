"use string";

class User {
  constructor(name,surname) {
    this.name = name;
    this.surname = surname;
  }
    getInformAbout() {
       return `${this.name} ${this.surname}`;
     }
  };
  const NewUser = new User('Furguson','Andry');
console.log(NewUser.getInformAbout());
class Stydent extends User {
 constructor(name,surname,year){
super(year)
this.year=year
   }
   getInformAbout(){
     super.getInformAbout
   }
   get Course() {
     return 2022 - this.year;
   }
   set Course(year) {
     this.year = newYear;
     if(this.year > 5 || this.year ===''){
     throw TypeError;
     }
   };
  }
const StydentNew = new Stydent('tim','cooc',2016);
 console.log (StydentNew.getInformAbout);

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
