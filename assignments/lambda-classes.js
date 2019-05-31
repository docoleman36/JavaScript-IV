// CODE here for your Lambda Classes
class Person {
  constructor(att) {
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(att) {
    super(att);
    this.specialty = att.specialty;
    this.favLanguage = att.favLanguage;
    this.catchPhrase = att.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} recieves a perfect score on ${subject}`;
  }
}

class Student extends Instructor {
  constructor(att) {
    super(att);
    this.previousBackgroud = att.previousBackgroud;
    this.className = att.className;
    this.favSubjects = att.favSubjects;
  }

  listsSubjects() {
    return this.favSubjects;
  }

  PRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(student, subject) {
    return `${student.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManagers extends Student {
  constructor(att) {
    super(att);
    this.gradClassName = att.gradClassName;
    this.favInstructor = att.favInstructor;
  }

  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const person = new Person({
  name: "Bob",
  age: 32,
  location: "Oregon"
});

const instructor = new Instructor({
  name: "Dan",
  specialty: "Everything",
  favLanguage: "Javascript",
  catchPhrase: "I play the banjo"
});

const billy = new Student({
  name: "Billy",
  previousBackgroud: "Went to college",
  favSubjects: ["HTML", "CSS"]
});

const proj = new ProjectManagers({
  name: "Marcel",
  student: "Justin",
  gradClassName: "CS2",
  favInstructor: "Josh Knell"
});

console.log(person.speak());
console.log(instructor.demo("javascript"));
console.log(instructor.grade(person, "React"));
console.log(billy.listsSubjects());
console.log(billy.PRAssignment(billy, "CS"));
console.log(billy.sprintChallenge(billy, "React"));
console.log(proj.standup("WebPT7"));
console.log(proj.debugsCode(billy, "Build Week"));
