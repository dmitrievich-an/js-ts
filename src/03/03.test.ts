import {StudentType} from "../02/02";
import {addSkill, doesStudentLeaveIn, makeIsActive} from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "Artem",
    age: 29,
    isActive: false,
    address: {
      streetTitle: "Surganova 2",
      city: {
        title: "Minsk",
        countryTitle: "Belarus"
      },
    },
    technologies: [
      {
        id: 1,
        title: "HTML"
      },
      {
        id: 2,
        title: "CSS"
      },
      {
        id: 3,
        title: "React"
      },
    ],
  }
})

test("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);
  addSkill(student, "JS");
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined();

})
test("make student is active", () => {
  expect(student.isActive).toBeDefined();
  makeIsActive(student);
  expect(student.isActive).toBe(true);
})

test("student leave in Moscow", () => {

  let res1 = doesStudentLeaveIn(student, "Moscow")
  let res2 = doesStudentLeaveIn(student, "Minsk")

  expect(res1).toBe(false)
  expect(res2).toBe(true)
})