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
   this.data=22;
   }
   getInformAbout2(){
     return `${this.getInformAbout()}`;
   }
   get year() {
     return this._year;
   }
   set year(year){
    if(typeof year !=='number'){
      throw new TypeError('value must be number');
    };
     if( year < new Date().getFullYear()-5 || year > new Date.getFullYear() ){
      throw new RangeError('value must be more not exeed 5 year');
     };
    this._year=year;
   };
getCourse(){
  return new Date().getFullYear()-this.year;
}

     };
   
  
const StydentNew = new Stydent('tim','cooc',18);
 console.log (StydentNew.getInformAbout2());
 console.log(StydentNew.getCourse());
 console.log()

 
class Group {
  constructor(Stydent, nameGroup) {
    this.nameGroups = nameGroup;
    this.Stydent = Stydent;
  };
showStudents(){
  if (this.students.length > 0) {
    return this.students.map((students) => students.UsersInfo());
  }
  throw new Error("in group mast be students");
}
}

const twoGroup = new twoGroup("Group",[
  new Stydent('Андрей' , "Иванов",2019),
  new Stydent("Кристина","Голкина",2020),
 ]);