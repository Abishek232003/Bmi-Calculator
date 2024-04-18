
// Your calculate() function definition
function calculate() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    // Get the number of subjects added dynamically
    const subjectsCount = document.querySelectorAll('[id^="c"]').length;

    // Loop through each subject input field dynamically
    for (let i = 1; i <= subjectsCount; i++) {
        // Get credit and grade values for each subject dynamically
        const credit = Number(document.getElementById("c" + i).value);
        const grade = document.getElementById("g" + i).value;

        // Add credit to total credits
        totalCredits += credit;

        // Lookup grade value from gradeValues object
        const gradeValues = {
            "O": 10.0,
            "A+": 9.0,
            "A": 8.0,
            "B+": 7.0,
            "B": 6.0,
            "C": 5.0,
            "U": 0.0
            // Add more mappings as needed
        };

        // Add grade points to total grade points
        totalGradePoints += gradeValues[grade] * credit;
    }

    // Calculate GPA
    const gpa = totalGradePoints / totalCredits;

    // Display the result
    if (isNaN(gpa)) {
        document.querySelector("#result h1").innerHTML = "Please enter valid inputs."; // Display message for invalid inputs
    } else {
        document.querySelector("#result h1").innerHTML = gpa.toFixed(2) + " GPA"; // Display GPA with two decimal places
    }
        
}


// Your DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    // Your other code here
});
// document.addEventListener("DOMContentLoaded", function() {
//     // Your code here
//     function calculate() {
//         // Your calculation code

//             // Initialize variables for total credits and total grade points
//             let totalCredits = 0;
//             let totalGradePoints = 0;
        
//             // Get the number of subjects added dynamically
//             const subjectsCount = document.querySelectorAll('[id^="c"]').length;
        
//             // Loop through each subject input field dynamically
//             for (let i = 1; i <= subjectsCount; i++) {
//                 // Get credit and grade values for each subject dynamically
//                 const credit = Number(document.getElementById("c" + i).value);
//                 const grade = document.getElementById("g" + i).value;
        
//                 // Add credit to total credits
//                 totalCredits += credit;
        
//                 // Lookup grade value from gradeValues object
//                 const gradeValues = {
//                     "O": 10.0,
//                     "A+": 9.0,
//                     "A": 8.0,
//                     "B+": 7.0,
//                     "B": 6.0,
//                     "C": 5.0,
//                     "U": 0.0
//                     // Add more mappings as needed
//                 };
        
//                 // Add grade points to total grade points
//                 totalGradePoints += gradeValues[grade] * credit;
//             }
        
//             // Calculate GPA
//             const gpa = totalGradePoints / totalCredits;
        
//             // Display the result
//             if (isNaN(gpa)) {
//                 document.querySelector("#result h1").innerHTML = "Please enter valid inputs."; // Display message for invalid inputs
//             } else {
//                 document.querySelector("#result h1").innerHTML = gpa.toFixed(2) + " GPA"; // Display GPA with two decimal places
//             }
                
//     }
// });

