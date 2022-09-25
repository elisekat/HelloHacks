import data from "./data.json" assert {type: "json"};
let assignments = data;

// CREATE FUNCTION
// checks if assignmnent exists at assignment name, returns existing or new assignment
export function createAssignments(input) {
    for (let i = 0; i < assignments.length; i++) {
        let assignment = assignments[i];
        if (assignment.name === input.name) {
            return assignment;
        }
        const newAssignment = {
            AssignmentName: input.name,
            Code: input.code,
            Term: input.term,
            Posts: []
        };
       assignments.push(newAssignment);
       return assignments;
       }}

//add posts by updating assignments 
export function updateAssignments(input){


}


