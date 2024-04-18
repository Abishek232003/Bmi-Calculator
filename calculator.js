// function calculate()
// {
//     const a1=Number(document.getElementById("c1").value)
//     const a2=Number(document.getElementById("c2").value)
//     const a3=Number(document.getElementById("c3").value)
//     const a4=Number(document.getElementById("c4").value)
//     const a5=Number(document.getElementById("c5").value)
//     const a6=Number(document.getElementById("c6").value)
//     const a7=Number(document.getElementById("c7").value)
//     const a8=Number(document.getElementById("c8").value)
//     const a9=Number(document.getElementById("c9").value)
//     const a10=Number(document.getElementById("c10").value)
//     const a11=Number(document.getElementById("c11").value)
//     const a12=Number(document.getElementById("c12").value)
//     const total=a1+a2+a3+a4+a5+a6+a7+a8+a9+a10+a11+a12



//     const grade1=documnet.getElementById("g1").value
//     const grade2=documnet.getElementById("g2").value

//     const grade3=documnet.getElementById("g3").value
   
//     const grade4=documnet.getElementById("g4").value

//     const grade5=documnet.getElementById("g5").value

//     const grade6=documnet.getElementById("g6").value

//     const grade7=documnet.getElementById("g7").value

//     const grade8=documnet.getElementById("g8").value

//     const grade9=documnet.getElementById("g9").value

//     const grade10=documnet.getElementById("g10").value

//     const grade11=documnet.getElementById("g11").value

//     const grade12=documnet.getElementById("g12").value


//     const gradeValues = {
//         "O":10.0,
//         "A+":9.0
//         "A":8.0,
//         "B+":7.0,
//         "B":6.0
//         "C": 5.0,
//         "U": 0.0
//         // Add more mappings as needed
//     };

    
//     const result = total * (gradeValues[grade2] + gradeValues[grade3] + gradeValues[grade4] + gradeValues[grade5] + gradeValues[grade6] + gradeValues[grade7] + gradeValues[grade8] + gradeValues[grade9] + gradeValues[grade10] + gradeValues[grade11] + gradeValues[grade12]);

//     // Display the result
//     document.getElementById("result").innerHTML = result+"va da ";
// }
function calculate() {
    const a1 = Number(document.getElementById("c1").value);
    const a2 = Number(document.getElementById("c2").value);
    const a3 = Number(document.getElementById("c3").value);
    const a4 = Number(document.getElementById("c4").value);
    const a5 = Number(document.getElementById("c5").value);
    const a6 = Number(document.getElementById("c6").value);
    const a7 = Number(document.getElementById("c7").value);
    const a8 = Number(document.getElementById("c8").value);
    const a9 = Number(document.getElementById("c9").value);
    const a10 = Number(document.getElementById("c10").value);
    const a11 = Number(document.getElementById("c11").value);
    const a12 = Number(document.getElementById("c12").value);
    const total = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12;

    const grade1 = document.getElementById("g1").value;
    const grade2 = document.getElementById("g2").value;
    const grade3 = document.getElementById("g3").value;
    const grade4 = document.getElementById("g4").value;
    const grade5 = document.getElementById("g5").value;
    const grade6 = document.getElementById("g6").value;
    const grade7 = document.getElementById("g7").value;
    const grade8 = document.getElementById("g8").value;
    const grade9 = document.getElementById("g9").value;
    const grade10 = document.getElementById("g10").value;
    const grade11 = document.getElementById("g11").value;
    const grade12 = document.getElementById("g12").value;

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
    if(gradeValues[grade1]==0.0||gradeValues[grade2]==0.0||gradeValues[grade3]==0.0||gradeValues[grade7]==0.0||gradeValues[grade4]==0.0||gradeValues[grade5]==0.0||gradeValues[grade6]==0.0||gradeValues[grade8]==0.0)
    {
        document.querySelector("#result h1").innerHTML = "NOt Qualified "; // Limit to 2 decimal places
    }
else{
    const result = (gradeValues[grade1] * a1 +
        gradeValues[grade2] * a2 +
        gradeValues[grade3] * a3 +
        gradeValues[grade4] * a4 +
        gradeValues[grade5] * a5 +
        gradeValues[grade6] * a6 +
        gradeValues[grade7] * a7 +
        gradeValues[grade8] * a8 +
        gradeValues[grade9] * a9 +
        gradeValues[grade10] * a10 +
        gradeValues[grade11] * a11 +
        gradeValues[grade12] * a12) / total;

// Display the result
document.querySelector("#result h1").innerHTML = result.toFixed(2) +" GPA"; // Limit to 2 decimal places

}
   
}




