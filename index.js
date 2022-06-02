class User{
  constructor(name,surname){
 this.name = name;
 this.surname = surname;
}
InformAbout(){
  return `$this.name $this.surname`
}
}
class Stydent extends User{
constructor(year){
  this.start=year
  this.data=2022
}
  get Course(){
    if() {
     return this.data  - this.start
    }else{
      this.Course > 5
      return console.log('not rules date')
    }
  }
  
}