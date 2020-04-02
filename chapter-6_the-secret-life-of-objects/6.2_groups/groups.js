class Group {
  constructor() {
    this.group = [10, 30];
  }
  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }
  delete(value) {
    this.group = this.group.filter(r => r !== value);
  }
  has(value) {
    if (this.group.includes(value)) return true;
    else return false;
  }
}
let member = new Group();
console.log(member.has(10));
