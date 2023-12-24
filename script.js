function calculateGrade() {
    var studentName = document.getElementById("studentName").value;
    var studentMarks = parseFloat(document.getElementById("studentMarks").value);

    if (!isNaN(studentMarks)) {
        var grade;

        if (studentMarks >= 79.5 && studentMarks <= 100) {
            grade = "A";
        } else if (studentMarks >= 60 && studentMarks <= 79) {
            grade = "B";
        } else if (studentMarks >= 50 && studentMarks <= 59) {
            grade = "C";
        } else if (studentMarks >= 40 && studentMarks <= 49) {
            grade = "D";
        } else {
            grade = "E";
        }

        var resultBox = document.getElementById("resultBox");
        resultBox.innerHTML = `${studentName} scored ${studentMarks}, which is grade ${grade}.`;
    } else {
        alert("Please enter a valid numeric value for student marks.");
    }
}
