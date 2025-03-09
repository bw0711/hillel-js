const user = {
  name: "John",
  age: 28,
  location: "New York, USA",
  occupation: "Web Developer",

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}, Occupation: ${this.occupation}`;
  }
};

console.log(user.getInfo());