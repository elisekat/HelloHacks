import {
    createAssignments,
    updateAssignments

} from "./assignments.js"

const showResult = document.getElementById("result");
const createAssignmentsForm = document.getElementById("createAssignmentsForm");
const updateAssignmentsForm = document.getElementById("updateAssignmentsForm");

if (createAssignmentsForm) {
    createAssignmentsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        const result = createAssignments(formProps);
        showResult.innerHTML = JSON.stringify(result, null, 2);
    });
}


updateAssignmentsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const result = updateAssignments(formProps);
    showResult.innerHTML = JSON.stringify(result, null, 2);
  });

