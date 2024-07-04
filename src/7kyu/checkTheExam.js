// Successfully working...
function checkExam(correctAnswer, studentAnswer) {
  let examResult = 0;

  for (let index = 0; index < correctAnswer.length; index++) {
    if (correctAnswer[index] === studentAnswer[index]) {
      examResult = examResult + 4;
    } else if (studentAnswer[index] === '') {
      examResult = examResult + 0;
    } else {
      examResult = examResult - 1;
    }
  }

  return examResult < 0 ? 0 : examResult;
}
