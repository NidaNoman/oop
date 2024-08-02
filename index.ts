#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}
class Person {
  student: Student[] = [];
  addStudent(obj: Student) {
    this.student.push(obj);
  }
}

const persons = new Person();

const programStart = async (persons: Person) => {
    do{

  console.log("welcome!");
  const ans = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "whom would you like to interact with?",
    choices: ["staff", "student", "exit"],
  });
  if (ans.select == "staff") {
    console.log(
      "you approach the staff room. please feel free to ask any question"
    );
  } else if (ans.select == "student") {
    const ans = await inquirer.prompt({
      name: "student",
      type: "input",
      message: "Enter the student name you wish to engage with:",
    });
    const student = persons.student.find((val) => val.name == ans.student);
  if (!student) {
    const name = new Student(ans.student);
    persons.addStudent(name);
    console.log(`hello iam ${name.name}. nice to meet you!`);
    console.log("new student added.");
    console.log("current student list:");
    console.log(persons.student);
  } else {
    console.log(`hello iam ${Student.name}. nice to see you again!`);
    console.log("existing student list");
    console.log(persons.student);
  }
}
else if(ans.select == "exit"){
    console.log("Exiting the program.....");
    
}
    }while(true)
} 

programStart(persons)