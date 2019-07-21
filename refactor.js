

  const CreateStudent = (name, subject, info, score) =>
  ({
      name, subject, info, score
  })

//new student
const chris = CreateStudent("Chris Miller", "History", "Failed last exam", 59)
//new student
const courtney = CreateStudent("Courtney Seward", "History", "Has completed all homework", 91)
//new student
const garrett = CreateStudent("Garrett Ward", "History", "Wonderful at helping other students", 88)

const studentContainer = document.querySelector("#container")  

  const createStudentComponent = (student) => {
    const studentHTMLRepresentation = `
          <div class="student">
          <h1>${student.name}</h1>
              <section class="bordered dashed section--padded">${student.subject}</section>
              <aside class="pushRight">
                  ${student.info}
              </aside>
              <aside>
              current score: ${student.score < 70 ? "failed": "passed"}
              </aside>
          </div>
      `
      studentContainer.innerHTML += studentHTMLRepresentation
  }

  createStudentComponent(chris)
  createStudentComponent(courtney)
  createStudentComponent(garrett)
   
