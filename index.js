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
   super(name,surname);
   this.year=year;
   }
   getInformAbout2(){
     return `${this.getInformAbout()}`;
   }
   getCourse() {
     return 2022 - this.year;
   }
   setCourse(year) {
     if(this.year < 5 || this.year ===''){
     throw TypeError;
     }
   };
  }
const StydentNew = new Stydent('tim','cooc',2016);
 console.log (StydentNew.getInformAbout2());
 console.log(StydentNew.getCourse());
 console.log()

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
