import data from "./data.json" assert {type: "json"};
let assignments = data;

// CREATE FUNCTION
// checks if assignmnent exists at assignment name, returns existing or new assignment
export function createAssignments(input) {
    for (let i = 0; i < assignments.length; i++) {
        let assignment = assignments[i];
        // checks if the input name === name of an assignment
        if (assignment.name === input.name) {
            return assignment;
        }
        // create a new assignment based on the inputted values
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

// UPDATE FUNCTION
// Within the addReview page, these changes will be added to an assignment

export function updateAssignments(input) {
    const index = assignments.findIndex((assignment) => {
        return assignment.name === input.name;
    });
    console.log(index)
    if (index === -1) {
        assignments.posts=[{
            
           "difficulty" : Number(input.difficulty),
           "time" : Number(input.time),
           "comment" : String(input.comment)
        }]
        return assignments
    }
    const assignment = assignments[index]; 
    let post = {

    }
    console.log(input)
    // if an input is changed (updating one of the fields of an assignment) it will change that field to the input value.
    if (input.Difficulty) {
        post["difficulty"] = input.Difficulty;
    }
    if (input.time) {
        post["time"] = input.time;
    }
    if (input.commtent) {
        post["comment"] = input.commtent;
    }
    assignment.posts.push(post)

    assignments[index] = assignment;
    console.log(assignments)
    return assignments;
}





