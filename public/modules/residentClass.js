export class Resident {
  constructor(name, tel, dues) {
    this.name = name;
    this.tel = tel;
    this.dues = dues;
  }
  getName() {
    return this.name;
  }
  getTel() {
    return this.tel;
  }
  GetDues() {
    return this.dues;
  }
}
