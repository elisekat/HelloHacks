import data from "../data.json";
let assignments = data;

// CREATE FUNCTION
// 
export function createAssignments(input) {
    for (let i = 0; i < assignments.length; i++) {
        let assignment = assignments[i];
        if (assignment.name === input.name) {
            return assignment
        }
        const newAssignment = {
            AssignmentName: input.name,
            Code: input.code,
            Term: input.term,
            Posts: []
        }
    };
}