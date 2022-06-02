class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  InformAbout() {
    return `$this.name $this.surname`;
  }
}
class Stydent extends User {
  InformAbout() {
    super.InformAbout;
  }
  constructor(year) {
    this.start = year;
    this._data = 2022;
  }
  get Course() {
    return this.data - this.start;
  }
  set Course(newYear) {
    this.start = newYear;
    if (this.Course) {
      this.Course > 5;
      throw TypeError;
    }
  }
}

const nameGroup = [
  { name: "Андрей" ,surname: "Иванов"},
  { name: "Кристина",surname:"Голкина"},
];
class Group {
  constructor(Stydent, nameGroup) {
    this.nameGroups = nameGroup;
    this.Stydent = Stydent;
  }

  showStudents() {
    return `$this.name $this.surname`
  }
}