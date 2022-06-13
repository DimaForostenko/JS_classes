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
     if( year < 16 || year > 23 ){
      throw new RangeError('value must be more 17');
     };
    this._year=year;
   };
getCourse(){
  return this.data-this.year;
}
  
     };
   
  
const StydentNew = new Stydent('tim','cooc',18);
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
