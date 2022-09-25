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
    }
}

//add posts by updating assignments 
export function updateAssignments(input) {


}

// UPDATE FUNCTION
// Within the addReview page, these changes will be added to an assignment

export function updateAssignments(input) {
    const index = assignments.findIndex((assignment) => {
        return assignment.name === input.na, e;
    });
    if (index === -1) {
        return assignments;
    }
    const assignment = assignments[index];

    if (input.difficulty) {
        assignment.posts.difficulty = Number(input.difficulty);
    }
    if (input.time_spent) {
        assignment.posts.time = number(input.time_spent);
    }
    if (input.Comment) {
        assignment.posts.Comment = string(input.Comment);
    }

    assignemnts[index] = assignment;
    return assignments;
}





